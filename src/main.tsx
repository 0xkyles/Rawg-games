import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

const config: ThemeConfig = {
    initialColorMode: "dark",
};

const theme = extendTheme({
    config,
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Plus Jakarta Sans', sans-serif`,
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
