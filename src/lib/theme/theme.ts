import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007C89",
      light: "#3BA6B0",
      dark: "#005F69",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#B7652B",
      light: "#D28B55",
      dark: "#854718",
      contrastText: "#FFFFFF"
    },
    background: {
      default: "#F4F8F9",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#121D2B",
      secondary: "#5D6978"
    },
    divider: "rgba(18, 29, 43, 0.1)"
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    allVariants: {
      letterSpacing: 0
    },
    h1: {
      fontFamily: "Plus Jakarta Sans, Inter, Arial, sans-serif",
      fontSize: "3.75rem",
      lineHeight: 1.08,
      fontWeight: 800
    },
    h2: {
      fontFamily: "Plus Jakarta Sans, Inter, Arial, sans-serif",
      fontSize: "2.25rem",
      lineHeight: 1.18,
      fontWeight: 800
    },
    body1: {
      lineHeight: 1.65
    },
    button: {
      textTransform: "none",
      fontWeight: 700
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          minHeight: 48,
          boxShadow: "none",
          "&.MuiButton-containedPrimary": {
            boxShadow: "0 14px 32px rgba(0, 124, 137, 0.24)",
            "&:hover": {
              boxShadow: "0 16px 36px rgba(0, 124, 137, 0.3)"
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: "#FFFFFF",
          transition: "box-shadow 160ms ease, background-color 160ms ease",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 124, 137, 0.55)"
          },
          "&.Mui-focused": {
            boxShadow: "0 0 0 4px rgba(0, 124, 137, 0.1)"
          }
        },
        notchedOutline: {
          borderColor: "rgba(18, 29, 43, 0.16)"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#5D6978"
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: 6
        }
      }
    }
  }
});
