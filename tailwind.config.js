/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Great Vibes'],
    },
  },
  safelist: [
    'shadow-sky-700',
    'shadow-yellow-600',
    'shadow-blue-700',
    'shadow-violet-500',
    'shadow-gray-500',
    'shadow-orange-500',
    'shadow-red-500',
    'shadow-sky-400',
    'shadow-orange-500',
    'shadow-teal-500',
    // Add more classes as needed
  ],
  plugins: [],
};
