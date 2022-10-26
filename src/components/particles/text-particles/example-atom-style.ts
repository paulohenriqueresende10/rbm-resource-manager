import styled from "styled-components";



 export const StyledText = styled.p`
  color: ${(props) => props.color};
  color: ${({ color }) => color}; 
 background-color: ${({ theme }) => theme.colors.primary1};
`; 
