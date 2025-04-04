import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      "10": "#e1f5fe",
      "40": "#eceffa",
      "50": "#cee0f9",
      "100": "#adcbf6",
      "200": "#8db6f2",
      "300": "#6ca2ee",
      "400": "#4b8dea",
      "500": "#0d3772",
      "600": "#114793",
      "700": "#0d3772",
      "800": "#092752",
      "900": "#092752",
    },
    secondary: {
      "10": "#e0f7fa", // lighter shade
      "50": "#b2ebf2", // lighter shade
      "100": "#80deea", // lighter shade
      "200": "#4dd0e1", // lighter shade
      "300": "#26c6da", // lighter shade
      "400": "#00bcd4", // lighter shade
      "500": "#2bbef9", // base color
      "600": "#1aa8d9", // darker shade
      "700": "#0091b5", // darker shade
      "800": "#007c99", // darker shade
      "900": "#00657a", // darker shade
    },
    gray2: {
      "10": "#f7f7f7",
      "50": "#e8e8e8",
      "100": "#d9d9d9",
      "200": "#cacaca",
      "300": "#bbbbbb",
      "400": "#acacac",
      "500": "#9d9d9d",

      "600": "#8e8e8e",
      "700": "#808080",

      "800": "#707070",
      "900": "#616161",
    },

    tertiary: {
      10: "#F7FBFF",
      50: "#FCFEFF",
      100: "#F5FCFF",
      200: "#F5FCFF",
      300: "#EFFAFE",
      400: "#EAF8FE",
      500: "#E1F5FE",
      600: "#D6E9F1",
      700: "#B4C4CB",
      800: "#9EACB2",
      900: "#7C878C",
    },
    focus: "#7FAC07",
    warning: "#D0342C",
    appGrey: "#8A8B8B",
    appDarkGrey: "#E8E8E8",
  },
  fonts: {
    body: "Roboto, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.75rem",
    md: "0.875rem",
    lg: "1rem",
  },
  borders: {
    "1px": "1px solid #D8D8D8",
    "2px": "0.2rem solid",
  },
  shadows: {
    all: "0 0 10px 1px rgba(0,0,0,0.3)",
    onlyBottom: "rgba(0, 0, 0, 0.15) 0px 1.95px 2.6px;",
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "rgba(0, 0, 0, 0.15) 0px 1px 4px",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    innerBottom: "inset 0px -6px 10px  rgb(0 0 0 / 0.05);",
    excludingTop: "rgba(0, 0, 0, 0.15) 0px 1.95px 2.6px;",
    cardShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
    good: "rgba(0, 0, 0, 0.3) -5px 10px 20px 10px;",
    none: "none",
  },
  constantPadding: { lg: "8rem", md: "1rem", sm: "1rem", xs: "1rem" },
  breakpoints: {
    xs: "300px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px",
    "3xl": "1600px",
    "4xl": "1900px",
  },
});
