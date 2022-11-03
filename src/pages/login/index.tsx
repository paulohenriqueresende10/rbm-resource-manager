import Container from 'components/atoms/container/container-index'
import InputContainer from 'components/atoms/input-container/input-container-index'
import Section from 'components/atoms/section/section-index'
import Header from 'components/molecules/header/header-index'
import Main from 'components/molecules/main/main-index'
import Button from 'components/particles/button/button-index'
import Logo from 'components/particles/logo/logo-index'
import Text from 'components/particles/text/text-index'
import Input from 'components/particles/input/input-index'
import React from 'react'

export default function Login() {
  return (
    <>
    <Header>
      <Logo />
    </Header>
    <Main>
      <Container />
      <Section>
        <Logo/>
        <Text as='h3' fontSize='20px' fontWeight='700' lineHeight='26px'>Entrar na minha conta</Text>
        <Text as='label' fontSize='14px' fontWeight='400' lineHeight='21px'>Acesse sua conta abaixo =)</Text>
        <InputContainer placeholder="Digite o seu e-mail" type="text" showLabel={true}>E-mail</InputContainer>
        <InputContainer placeholder="Digite a sua senha" type="password" showLabel={true}>Senha</InputContainer>
        <Button>ENTRAR</Button>
        <Text as='label' fontSize='14px' fontWeight='400' lineHeight='21px'>Primeiro acesso? <u><b>Ative sua conta.</b></u></Text>
      </Section>       
    </Main>
    </>
  )
}
