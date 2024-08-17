'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from '@phosphor-icons/react';

const ThemeToggler = () => {
  const [dark, setDark] = useState(() => {
    let theme = window.localStorage.getItem('theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      window.localStorage.setItem('theme', theme);
    }
    return theme === 'dark';
  });

  const toggleTheme = () => {
    setDark(!dark);
  };

  useEffect(() => {
    const theme = dark ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);

    const html = document.getElementsByTagName('html')[0] as HTMLElement;

    html.classList.add(theme);
    html.classList.remove(!dark ? 'dark' : 'light');

    html.setAttribute('data-theme', theme);
  }, [dark]);

  return (
    <label className='swap swap-rotate'>
      <input
        type='checkbox'
        className='theme-controller'
        value={dark ? 'dark' : 'light'}
        onChange={toggleTheme}
      />
      <Sun size={32} className='swap-on fill-primary' />
      <Moon size={32} className='swap-off fill-primary' />
    </label>
  );
};

export default ThemeToggler;
