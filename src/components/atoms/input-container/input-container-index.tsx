import EyeIcon from 'components/particles/eye/eye-index'
import Input from 'components/particles/input/input-index'
import Label from 'components/particles/label/label-index'
import React, { ReactNode, useEffect, useState } from 'react'
import * as Styled from './input-container-style'

type InputContainerProps = {
    children : ReactNode;
    showLabel?: boolean;
    placeholder?: string;
    type: "text" | "password" | any;
}

export default function InputContainer({children, showLabel, type, placeholder}: InputContainerProps) {

  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const [ inputType, setInputType] = useState<'text' | 'password'>('password')


    useEffect(()=>{
      isEyeOpen ? setInputType('text') : setInputType('password')
    },[isEyeOpen])

  return (
    <Styled.StyledInputContainer >
        {showLabel &&
            <Label>{children}</Label>     
        } 
        <Input type={inputType} placeholder={placeholder}/>
        {type==='password' &&
        <EyeIcon
        isEyeOpen={isEyeOpen}
        setIsEyeOpen={setIsEyeOpen}/>}
    </Styled.StyledInputContainer> 
  )
}