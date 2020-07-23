const white = "#999";
const black = "#1a1919";
const gray = "#F8F8F9";

const themeLight = {
  background: gray,
  body: black
};

const themeDark = {
  background: black,
  body: white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;