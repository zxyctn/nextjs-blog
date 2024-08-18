'use client';

import Link from 'next/link';

import ThemeToggler from '@/lib/components/theme-toggler';

const Nav = () => {
  return (
    <div className='flex items-center justify-between'>
      <Link href='/'>
        <span className='font-bold text-4xl md:text-5xl lg:text-6xl text-primary dark:text-primary-dark'>
          _blog
        </span>
      </Link>
      <ThemeToggler />
    </div>
  );
};

export default Nav;
