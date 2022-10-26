import styled, { createGlobalStyle } from "styled-components";

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


export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    height: calc(100% - 76px);
    /* padding: 181px 140px 182px 108px; */
    gap: 225.26px;
    align-items: center;
    background-color: ${({theme})=> theme.colors.primary4};
`;