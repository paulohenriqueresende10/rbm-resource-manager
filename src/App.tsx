import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router";
import AuthContextProvider from "contexts/auth-context";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";
import Login from "pages/login";
import Dashboard from "pages/dashboard";

function App() {
  const { theme } = useTheme();
  return (
    <>
    <GlobalStyle />
    <ThemeContext theme={theme}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
            <Route index path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthContextProvider>
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
      font-family: poppins, sans-serif;
    };
`;