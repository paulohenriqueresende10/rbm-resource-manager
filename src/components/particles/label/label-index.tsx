import React from 'react'
import * as Styled from "./label-style";
export interface ButtonPropsInterface
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({
    children,
    ...restProps
  }: ButtonPropsInterface) {
  return (
    <Styled.StyledLabel {...restProps}>{children}</Styled.StyledLabel>
  )
}
