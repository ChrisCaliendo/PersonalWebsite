/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'fontFamily':{
        'nabla': ['nabla'],
        'ptSans': ['PT Sans']

      },
      backgroundImage: {
        'pasadena': 'url("https://images.unsplash.com/photo-1506607541365-d0c9593de494?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Replace with the path to your image
      },
    },
    plugins: [],
  }
}
