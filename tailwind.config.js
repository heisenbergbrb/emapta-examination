module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: [ 'Inter' ]
      },
      colors: {
        'input': '#FAF6EA',
        'input-placeholder': '#baa354',
        'input-placeholder-dark': '#7e7d79',
        'input-dark': '#3D3D3D',
        'modal-btn': '#F3F4F6'
      },
      height: {
        '5.5': '23.4px'
      },
      width: {
        '5.5': '23.4px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
