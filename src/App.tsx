import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { defaultTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./contexts/GlobalContext";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <ChakraProvider>
          <BrowserRouter>
            <GlobalProvider>
              <GlobalStyle />
              <Router />
            </GlobalProvider>
          </BrowserRouter>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
