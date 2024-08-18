import Link from 'next/link';

import { client } from '@/lib/sanity';
import type { Entry } from '@/lib/types';

export const revalidate = 30; // revalidate every 30 seconds

const getEntries = async () => {
  const query = `
  *[_type == 'entry'] | order(_createdAt desc) {
    title,
    "createdAt": _createdAt,
    "slug": slug.current
  }
  `;

  const data = await client.fetch(query);

  return data;
};

const Home = async () => {
  const data: Entry[] = await getEntries();

  return (
    <main className='grid gap-4 text-primary'>
      {data.map(({ slug, createdAt, title }) => {
        const date = new Date(createdAt).toISOString().split('T')[0];

        return (
          <Link key={slug} href={`/entry/${slug}`}>
            <div className='w-full flex gap-8 items-center justify-between border-b-2 py-2 border-primary border-dashed text-nowrap '>
              <div className='w-48 overflow-auto grow'>
                <h1 className='text-2xl font-bold'>{title}</h1>
              </div>

              <p className='text-lg'>{date}</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default Home;
