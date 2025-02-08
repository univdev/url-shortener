"use client";

import { FC, ReactNode } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

export type ThemeProviderProps = {
  children: ReactNode;
};

const theme = createTheme({
  spacing: 2,
  typography: {
    fontFamily:
      "Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, 'Noto Sans KR', 'Malgun Gothic', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;",
    h1: {
      fontSize: "4rem",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    h2: {
      fontSize: "2.5rem",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: 1.33,
      letterSpacing: 0,
    },
    h3: {
      fontSize: "2rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h4: {
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h5: {
      fontSize: "1.25rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: 1.47,
      letterSpacing: 0,
    },
    h6: {
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 1.56,
      letterSpacing: 0,
    },
    subtitle1: {
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 1.57,
      letterSpacing: 0,
    },
    body1: {
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    body2: {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 1.57,
      letterSpacing: 0,
    },
    caption: {
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    overline: {
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: 0,
      textTransform: "uppercase",
    },
  },
  palette: {
    primary: {
      light: "#B095FF", // 메인 색상보다 밝은 톤
      main: "#9C88FF", // 조정된 메인 색상
      dark: "#7C6BCC", // 메인 색상보다 어두운 톤
      contrastText: "#FFFFFF", // 대비를 위한 텍스트 색상
    },
    secondary: {
      main: "#8E33FF",
      light: "#C684FF",
      dark: "#5119B7",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#00B8D9",
      light: "#61F3F3",
      dark: "#006C9C",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#22C55E",
      light: "#77ED8B",
      dark: "#118D57",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFAB00",
      light: "#FFD666",
      dark: "#B76E00",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#FF5630",
      light: "#FFAC82",
      dark: "#B71D18",
      contrastText: "#FFFFFF",
    },
    background: {
      paper: "#FDF8E6",
    },
    grey: {
      900: "#141A21",
      800: "#1C252E",
      700: "#454F5B",
      600: "#637381",
      500: "#919EAB",
      400: "#919EAB1F",
      300: "#919EAB1F",
      200: "#919EAB1F",
      100: "#919EAB1F",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
        sizeLarge: {
          display: "flex",
          height: "48px",
          minWidth: "64px",
          padding: "0px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        },
        sizeMedium: {
          display: "flex",
          height: "36px",
          minWidth: "64px",
          padding: "0px 12px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        },
        sizeSmall: {
          display: "flex",
          height: "30px",
          minWidth: "64px",
          padding: "0px 8px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            "&.Mui-focused": {
              borderColor: "#919EAB",
            },
            borderRadius: 8,
            fieldset: {
              borderColor: "#919EAB",
              fontSize: 15,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "22px",
              color: "#919EAB",
            },
          },
        },
      },
    },
  },
  shadows: [
    "none", // 0
    "0px 1px 2px 0px rgba(145, 158, 171, 0.16)", // 1
    "0px 1px 2px 0px rgba(145, 158, 171, 0.16)",
    "0px 1px 2px 0px rgba(145, 158, 171, 0.16)",
    "0px 4px 8px 0px rgba(145, 158, 171, 0.16)", // 4
    "0px 4px 8px 0px rgba(145, 158, 171, 0.16)",
    "0px 4px 8px 0px rgba(145, 158, 171, 0.16)",
    "0px 4px 8px 0px rgba(145, 158, 171, 0.16)",
    "0px 8px 16px 0px rgba(145, 158, 171, 0.16)", // 8
    "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
    "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
    "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
    "0px 12px 24px 0px rgba(145, 158, 171, 0.16)", // 12
    "0px 12px 24px 0px rgba(145, 158, 171, 0.16)",
    "0px 12px 24px 0px rgba(145, 158, 171, 0.16)",
    "0px 12px 24px 0px rgba(145, 158, 171, 0.16)",
    "0px 16px 32px 0px rgba(145, 158, 171, 0.16)", // 16
    "0px 16px 32px 0px rgba(145, 158, 171, 0.16)",
    "0px 16px 32px 0px rgba(145, 158, 171, 0.16)",
    "0px 16px 32px 0px rgba(145, 158, 171, 0.16)",
    "0px 20px 40px 0px rgba(145, 158, 171, 0.16)", // 20
    "0px 20px 40px 0px rgba(145, 158, 171, 0.16)",
    "0px 20px 40px 0px rgba(145, 158, 171, 0.16)",
    "0px 20px 40px 0px rgba(145, 158, 171, 0.16)",
    "0px 24px 48px 0px rgba(145, 158, 171, 0.16)", // 24
  ],
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
