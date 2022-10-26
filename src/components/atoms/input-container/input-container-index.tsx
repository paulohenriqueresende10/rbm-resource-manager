import Input from 'components/particles/input/input-index'
import Label from 'components/particles/label/label-index'
import React, { ReactNode } from 'react'
import * as Styled from './input-container-style'

type InputContainerProps = {
    children : ReactNode;
    showLabel?: boolean;
    type: "text" | "password";
}

export default function InputContainer({children, showLabel, type}: InputContainerProps) {
  return (
    <Styled.StyledInputContainer >
        {showLabel &&
            <Label>{children}</Label>     
        }
        <Input type={type} />
    </Styled.StyledInputContainer>
  )
}