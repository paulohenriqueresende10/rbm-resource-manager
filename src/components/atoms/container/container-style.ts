import styled from "styled-components";

export const StyledContainer = styled.div`
    padding:72px 0 72px 108px;
    width: 30vw;
`;

export const StyledSubtitle = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 31.0898px;
    line-height: 31px;
    padding: 12px 0;
`;

export const StyledContent = styled.div`
    display: flex;
    margin-top: 12px;
    margin-bottom: 54px;
`;

export const StyledCircle = styled.div`
    background: #0092D4;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 4px 1rem;
`;

export const StyledText = styled.h1`
    color: ${(props) => props.color};
    color: ${({ color }) => color}; 
    font-style: normal;
    font-weight: 700;
    font-size: 62.1797px;
    line-height: 93px;
`; 