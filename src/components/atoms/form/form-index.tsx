
import Input from 'components/particles/input/input-index';
import React from 'react'
import { StyledForm } from './form-style';
export interface FormPropsInterface
  extends React.FormHTMLAttributes<HTMLFormElement> {}

export default function Form({
    children,
    ...restProps
  }: FormPropsInterface) {
  return (
    <StyledForm {...restProps}>
        {children}
    </StyledForm>
  )
}
