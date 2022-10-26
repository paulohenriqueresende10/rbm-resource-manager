import React from "react";
import * as Styled from "./header-style";

export interface HeaderPropsInterface
  extends React.HTMLAttributes<HTMLElement> {}

export default function Header({
  children,
  ...restProps
}: HeaderPropsInterface){
  return (
    <Styled.StyledHeader {...restProps}>{children}</Styled.StyledHeader>
  )
}