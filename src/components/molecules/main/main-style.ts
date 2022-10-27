import styled from "styled-components";


export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    height: calc(100% - 76px);
    padding: 72px 140px 0px 108px;
    gap: 225.26px;
    align-items: center;
    background-color: ${({theme})=> theme.colors.primary4};
`;