import Image from 'next/image';
import { PortableText } from 'next-sanity';
import type { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: '_blog | Entry',
};

const Entry = async ({ params }: { params: { slug: string } }) => {
  const data: any = await getEntry(params.slug);
  const date = new Date(data.createdAt).toISOString().split('T')[0];

  metadata.title = `_blog | ${data.title}`;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <center>
          <Image
            src={urlFor(value).url()}
            alt='Image'
            width={800}
            height={800}
          />
        </center>
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

      <div className='w-full !max-w-full prose-sm md:prose pt-4 md:pt-8 lg:pt-12 prose-code:block prose-code:bg-base-content prose-code:p-4 prose-code:font-normal prose-code:text-base-100 prose-a:text-primary'>
        <PortableText value={data.content} components={PortableTextComponent} />
      </div>
    </div>
  );
};

export default Entry;
