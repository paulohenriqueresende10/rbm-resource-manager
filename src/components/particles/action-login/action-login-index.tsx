import React from 'react'
import Input from '../input/input-index';
import Text from 'components/particles/text/text-index';
import * as Styled from "./action-login-style";
export interface ButtonPropsInterface
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export default function ActionLogin({
    children,
    ...restProps
  }: ButtonPropsInterface) {
  return (

    <Styled.StyledRow>
      <div>
        <Input type="checkbox" /><Text as='label' fontSize='14px' fontWeight='500' lineHeight='21px'> Salvar login</Text>
      </div>
      <div>
        <Text as='label' fontSize='14px' fontWeight='500' lineHeight='21px'><u><b> Esqueci a senha</b></u></Text>
      </div>

    </Styled.StyledRow>
   
    
  )
}
