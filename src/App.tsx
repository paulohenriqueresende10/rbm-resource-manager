import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";
import Login from "pages/login";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <>
    <GlobalStyle />
    <ThemeContext theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext>
    </>
  );
}

export default App;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    *{
        padding: 0;
        margin: 0;
    }
    body, html, #root {
        height: 100%;
        font-family: poppins, sans-serif;
    };
`;