import styled from "styled-components";
import { THEME } from "contants";

export const StyledButton = styled.button`
  background-color: ${THEME.light.colors.primary2};
  width: 410px;
  min-width: 320px;
  border-radius: 6px;
  color:${THEME.light.colors.secondary4};
  padding: 17px 0px;
  border: none;
`;
