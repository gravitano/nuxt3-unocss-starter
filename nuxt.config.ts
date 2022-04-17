import { defineNuxtConfig } from 'nuxt3';

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

    webFonts: true,

    // core options
    shortcuts: [
      {
        'form-input':
          'px-2 py-2 border border-gray-500 rounded-md w-full focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 focus:border-blue-500 focus:outline-none',
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
