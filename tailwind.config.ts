import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./lib/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['black'],
          primary: '#6100FF',
          'base-100': '#ffffff',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['black'],
          primary: '#00FFC2',
        },
      },
    ],
  },
};
export default config;
