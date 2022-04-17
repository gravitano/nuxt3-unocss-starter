import { defineNuxtConfig } from 'nuxt3';
import presetIcons from '@unocss/preset-icons';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@unocss/nuxt'],
  unocss: {
    // presets
    preflight: true,
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    typography: true,
    wind: true,

    // presets: [
    //   presetIcons({
    //     /* options */
    //   }),
    // ],

    webFonts: {
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Poppins:100,200,300,400,500,600,700,800,900',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    },

    // core options
    shortcuts: [
      {
        'form-input': `px-2 py-2 border border-gray-500 rounded-md w-full
          focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 focus:border-blue-500 focus:outline-none
          `,
      },
      {
        'btn-primary':
          'px-4 py-2 border borde-blue-500 rounded-lg appearance-none bg-blue-500 text-white inline-flex justify-center hover:bg-blue-600',
      },
      {
        'alert-info':
          'px-2 py-2 rounded border bg-sky-500 text-white border-sky-500 w-full flex',
      },
    ],
    rules: [],
  },
});
