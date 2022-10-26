import React from 'react'
import * as Styled from "./button-style";
export interface ButtonPropsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
    children,
    ...restProps
  }: ButtonPropsInterface) {
  return (
    <Styled.StyledButton {...restProps}>{children}</Styled.StyledButton>
  )
}