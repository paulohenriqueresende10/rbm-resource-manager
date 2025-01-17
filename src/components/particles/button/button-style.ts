import styled from "styled-components";
import { THEME } from "../../../constants";

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${THEME.light.colors.primary2};
  width: 100%;
  min-width: 320px;
  border-radius: 6px;
  color:${THEME.light.colors.secondary4};
  padding: 17px 0px;
  border: none;
  &:hover{
    background-color: ${THEME.light.colors.primary5};
  }
`;
