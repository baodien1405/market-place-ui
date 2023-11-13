/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1640px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '160px',
          paddingRight: '160px'
        }
      })
      addComponents({
        '.header-height': {
          height: '58px'
        }
      })
    })
  ]
}
