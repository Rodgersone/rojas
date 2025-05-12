module.exports = {
    content: [
      "./src/**/*.{html,js}",  // Tailwind will scan these files for classes
      "./node_modules/flowbite/**/*.js"  // Add Flowbite's JavaScript components
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')  // Add Flowbite plugin here
    ],
  };
  