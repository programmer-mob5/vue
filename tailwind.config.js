/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surfaceVariant: '#B3D1E8',
        onFieldBackground: '#55B7FE',
        primary500: '#0063F7',
        surfaceVariant2: '#EBEAF0',

        generalSidebar: '#FFFFFF',
        generalText: '#201E29',
        generalTextLabel: '#201E29',
        generalBreadCrumb:'#6C688D',

        fieldBackground: '#FFFFFF',
        fieldBorder: '#B5B3C7',
        fieldText: '#201E29',
        fieldTitle: '#100F15',
        fieldRequired: '#FF0022',

        toastDanger: '#FFE5E9',
        toastDangerText: '#FF0022',
        toastSuccessText: '#008545',
        toastSuccess: '#DBFFEE',

        buttonPrimaryText: '#FFFFFF',
        buttonSuccess: '#00A455',
        buttonSuccessText: '#FFFFFF',
        buttonDanger: '#FF0022',
        buttonDark: '#100F15',

        onGeneralSidebar: '#55B7FE',

        headerBackground: '#FFFFFF',

        searchBorder: '#B5C4CF',
        searchBackground: '#EBEAF0',
        searchPlaceHolderText: '#8E989D',
      },
      boxShadow: {
        modal: '-4px 4px 20px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
