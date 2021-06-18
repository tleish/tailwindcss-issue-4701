var tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss('./app/javascript/stylesheets/tailwind.config.js'),
    require('postcss-import'),
    require('autoprefixer')({ add: true, grid: false }),
  ]
}
