import React from 'react'
import EyeIcon from '../eye/eye-index';
import * as Styled from "./input-style";
export interface InputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
    children,
    ...restProps
  }: InputPropsInterface) {
  return (
    <Styled.StyledInput {...restProps}/>

  )
}
