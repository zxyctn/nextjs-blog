'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from '@phosphor-icons/react';

const ThemeToggler = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    let localValue = window.localStorage.getItem('theme');
    if (!localValue) {
      const osPreference = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      setTheme(osPreference);
    } else {
      setTheme(localValue);
    }
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem('theme', theme);

    const html = document.getElementsByTagName('html')[0] as HTMLElement;
    html.classList.add(theme);
    html.classList.remove(theme === 'dark' ? 'light' : 'dark');
    html.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <label className='swap swap-rotate'>
      <input
        type='checkbox'
        className='theme-controller'
        value={theme}
        onChange={toggleTheme}
        checked={theme === 'light'}
      />
      <Moon size={32} className={`fill-primary swap-off`} />
      <Sun size={32} className={`fill-primary swap-on`} />
    </label>
  );
};

export default ThemeToggler;
