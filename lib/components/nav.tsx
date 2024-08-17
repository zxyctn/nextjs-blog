'use client';

import { SignIn } from '@phosphor-icons/react';
import ThemeToggler from './theme-toggler';

const Nav = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className=''>
        <a href='/' className=''>
          <span className='font-bold text-6xl text-primary dark:text-primary-dark'>
            _blog
          </span>
        </a>
      </div>
      <div className='flex items-center gap-8'>
        <ThemeToggler />
        <a href='/login' className=''>
          <SignIn size={32} className='text-primary' />
        </a>
      </div>
    </div>
  );
};

export default Nav;
