import styled from "styled-components";

export const StyledInput = styled.input`
    width: 410px;
    min-width: 320px;
    border: 1px solid #DCDDE3;
    border-radius: 6px;
    font-size: 14px;
    padding: 18px 16px 19px 16px;

    &:focus{
        border: 1px solid #0092D4;
        outline: none;
    }
`;