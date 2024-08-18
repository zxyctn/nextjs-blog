import Image from 'next/image';
import { PortableText } from 'next-sanity';

import { client, urlFor } from '@/lib/sanity';
import type { Entry } from '@/lib/types';

export const revalidate = 30; // revalidate every 30 seconds

const getEntry = async (slug: string) => {
  console.log(slug);

  const query = `
  *[_type == 'entry' && slug.current == '${slug}'] {
    title,
    "createdAt": _createdAt,
    "slug": slug.current,
    content
  }[0]
  `;

  const data = await client.fetch(query);

  return data;
};

const Entry = async ({ params }: { params: { slug: string } }) => {
  const data: any = await getEntry(params.slug);
  const date = new Date(data.createdAt).toISOString().split('T')[0];

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image src={urlFor(value).url()} alt='Image' width={800} height={800} />
      ),
    },
  };

  return (
    <div className=''>
      <span className='text-primary'>{date}</span>
      <div className='bg-primary p-4 md:p-8 overflow-auto whitespace-nowrap w-full'>
        <div className='prose-sm md:prose prose-h1:text-base-100'>
          <h1 className='font-bold'>{data.title}</h1>
        </div>
      </div>

      <div className='prose-sm md:prose pt-4 md:pt-8 lg:pt-12 prose-code:block prose-code:bg-base-content prose-code:p-4 prose-code:font-normal prose-code:text-base-100 prose-a:text-primary'>
        <PortableText value={data.content} components={PortableTextComponent} />
      </div>
    </div>
  );
};

export default Entry;
