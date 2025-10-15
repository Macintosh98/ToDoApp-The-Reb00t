import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
        transitions: {
                easing: {
                        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
                        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
                        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
                        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
                },
                duration: {
                        shortest: 600,
                        shorter: 700,
                        short: 800,
                        standard: 900,
                        complex: 1000,
                        enteringScreen: 900,
                        leavingScreen: 900,
                },
        },
        colorSchemes: {
                dark: {
                        palette: {
                                primary: {
                                        main: "#f5d0fe",
                                },
                                error: {
                                        main: "#fecdd3",
                                },
                                success: {
                                        main: "#d9f99d",
                                },
                                // mode: "dark",
                                background: {
                                        // default: "#eee", // A light teal
                                        // paper: "#000", // White for paper-like elements
                                },
                        },
                },
                light: {
                        palette: {
                                primary: {
                                        main: "#f0abfc",
                                },
                                error: {
                                        main: "#fda4af",
                                },
                                success: {
                                        main: "#86efac",
                                },
                                // mode: "dark",
                                background: {
                                        default: "#eee", // A light teal
                                        // paper: "#000", // White for paper-like elements
                                },
                        },
                },
        },
        shape: {
                borderRadius: "30px !important", // Sets a default border-radius of 8px for components
        },
        typography: {
                fontFamily: [
                        "DynaPuff",
                        "-apple-system",
                        "BlinkMacSystemFont",
                        '"Segoe UI"',
                        "Roboto",
                        '"Helvetica Neue"',
                        "Arial",
                        "sans-serif",
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                ].join(","),
        },

        components: {
                // MuiTextField: {
                //         styleOverrides: {
                //                 root: {
                //                         "--TextField-brandBorderColor":
                //                                 "#E0E3E7",
                //                         "--TextField-brandBorderHoverColor":
                //                                 "#B2BAC2",
                //                         "--TextField-brandBorderFocusedColor":
                //                                 "#6F7E8C",
                //                         "& label.Mui-focused": {
                //                                 color: "var(--TextField-brandBorderFocusedColor)",
                //                         },
                //                 },
                //         },
                // },
                // MuiOutlinedInput: {
                //         styleOverrides: {
                //                 notchedOutline: {
                //                         borderColor:
                //                                 "var(--TextField-brandBorderColor)",
                //                 },
                //                 root: {
                //                         [`&:hover .${outlinedInputClasses.notchedOutline}`]:
                //                                 {
                //                                         borderColor:
                //                                                 "var(--TextField-brandBorderHoverColor)",
                //                                 },
                //                         [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
                //                                 {
                //                                         borderColor:
                //                                                 "var(--TextField-brandBorderFocusedColor)",
                //                                 },
                //                 },
                //         },
                // },
                // MuiIconButton: {
                //         styleOverrides: {
                //                 root: {
                //                         boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)", // Default shadow for all IconButtons
                //                 },
                //         },
                // },
                MuiFilledInput: {
                        styleOverrides: {
                                root: {
                                        "& .MuiFilledInput-input": {
                                                padding: "20px 40px !important",
                                        },
                                        // margin: "0px !important",
                                        paddingTop: "0px !important",
                                        borderRadius: "30px !important",
                                        "&::before, &::after": {
                                                borderRadius: "30px !important",
                                                borderBottom:
                                                        "0px solid var(--TextField-brandBorderColor)",
                                        },
                                        "&:hover:not(.Mui-disabled, .Mui-error):before": {
                                                borderRadius: "30px !important",
                                                borderBottom:
                                                        "0px solid var(--TextField-brandBorderHoverColor)",
                                        },
                                        "&.Mui-focused:after": {
                                                borderRadius: "30px !important",
                                                borderBottom:
                                                        "0px solid var(--TextField-brandBorderFocusedColor)",
                                        },
                                },
                        },
                },
                MuiInput: {
                        styleOverrides: {
                                root: {
                                        // margin: "0px !important",
                                        // padding: "0px !important",
                                        borderRadius: "30px !important",
                                        "&::before": {
                                                borderRadius: "30px !important",
                                                borderBottom:
                                                        "0px solid var(--TextField-brandBorderColor)",
                                        },
                                        "&:hover:not(.Mui-disabled, .Mui-error):before": {
                                                borderRadius: "30px !important",
                                                borderBottom:
                                                        "0px solid var(--TextField-brandBorderHoverColor)",
                                        },
                                        "&.Mui-focused:after": {
                                                borderRadius: "30px !important",
                                                borderBottom:
                                                        "0px solid var(--TextField-brandBorderFocusedColor)",
                                        },
                                },
                        },
                },
        },
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
        <StrictMode>
                <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <App />
                </ThemeProvider>
        </StrictMode>,
);
