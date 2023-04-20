import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/react-query/queryClient";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "./config/theme";

document.body.classList = 'bg-gray-100';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <StyledEngineProvider injectFirst>
         <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
               <App />
            </QueryClientProvider>
         </ThemeProvider>
      </StyledEngineProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
