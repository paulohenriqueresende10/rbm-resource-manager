import CloseAlert from 'components/particles/alert-button/alert-button-index'
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
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputContainer({children, showLabel, type, placeholder, value, onChange}: InputContainerProps) {

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
        <Input type={type === "text"? type :inputType} placeholder={placeholder} value={value} onChange={onChange}/>
        {type==='password' &&
        <EyeIcon
        isEyeOpen={isEyeOpen}
        setIsEyeOpen={setIsEyeOpen}/>}
    </Styled.StyledInputContainer> 
  )
}