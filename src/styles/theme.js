import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    purple: {
      400: "#422040",
    },
    gray: {
      100: "#F6F4F4",
      400: "#C8C8C8",
      900: "#414144",
    },
    orange: {
      50: "#F0D0C0",
      100: "#F8B595",
      200: "#EC8350",
      400: "#F16623",
      700: "#C8561F",
    },
    pink: {
      400: "#E0607E",
    },
    green: {
      500: "#46b934",
    },
    red: {
      500: "#FA380E",
    },
    white: {
      50: "#ffffff",
    },
  },
  gray: {
    400: "#C8C8C8",
  },
  orange: {
    50: "#F0D0C0",
    200: "#EC8350",
    400: "#F16623",
    700: "#C8561F",
  },
  pink: {
    400: "#E0607E",
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "#000000",
        overflowX: 'hidden'
      },
    },
  },
});
