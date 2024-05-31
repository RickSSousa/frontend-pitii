import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UsersProvider } from "./contexts/UsersContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UsersProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UsersProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
