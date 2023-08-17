/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,tsx,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      display: ['Rubik', 'system-ui'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#35b2b0',

          secondary: '#ec8499',

          accent: '#28ba65',

          neutral: '#322b3b',

          'base-100': '#ffffff',

          info: '#799bf1',

          success: '#27a078',

          warning: '#fcc755',

          error: '#f71d20',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
