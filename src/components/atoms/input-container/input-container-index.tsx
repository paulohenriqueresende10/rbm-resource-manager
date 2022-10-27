import EyeIcon from 'components/particles/eye/eye-index'
import Input from 'components/particles/input/input-index'
import Label from 'components/particles/label/label-index'
import React, { ReactNode } from 'react'
import * as Styled from './input-container-style'

type InputContainerProps = {
    children : ReactNode;
    showLabel?: boolean;
    placeholder?: string;
    type: "text" | "password" | any;
}

export default function InputContainer({children, showLabel, type, placeholder}: InputContainerProps) {
  return (
    <>
    <Styled.StyledInputContainer >
        {showLabel &&
            <Label>{children}</Label>     
        } 
        <Input type={type} placeholder={placeholder }/>
        {type==='password' &&
        <EyeIcon/>}
    </Styled.StyledInputContainer>
    </>
    
  )
}