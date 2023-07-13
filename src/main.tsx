import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./routing/routes";
import { RouterProvider } from "react-router-dom";
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
    colors: {
        gray: {
            50: "#f9f9f9",
            100: "#ededed",
            200: "#d3d3d3",
            300: "#a6a6a6",
            400: "#8c8c8c",
            500: "#898989",
            600: "#6c6c6c",
            700: "#404040",
            800: "#121212",
            900: "#120b0d",
        },
    },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
);
