/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,tsx,ts,jsx}", "./components/**/*.{js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FA8A34",
        background: "#D9D9D9",
        "secondary-grey": "#636363",
        "secondary-red": "#EE6363",
        "secondary-green": "#00A385",
        "tab-icon-default": "#606773",
        "primary-text": "#06070A",
        "secondary-text": "#414141",
        "secondary-green-text": "#009E81",
        "secondary-green-muted": "#E9F7F2",
        "common-border": "#CED5E0",
        "profile-fallback": "#EBEFF5",
      },
    },
  },
  plugins: [],
};
