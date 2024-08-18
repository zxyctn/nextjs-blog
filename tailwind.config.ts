import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./lib/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['black'],
          primary: '#6100FF',
          'base-100': '#FFFFFF',
          '--bc': '#000000',
          '--fallback-bc': '#000000',
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
        },
        dark: {
          ...require('daisyui/src/theming/themes')['black'],
          primary: '#00FFC2',
          '--bc': '#FFFFFF',
          '--fallback-bc': '#FFFFFF',
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
        },
      },
    ],
  },
};
export default config;
