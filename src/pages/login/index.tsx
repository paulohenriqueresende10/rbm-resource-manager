import Container from 'components/atoms/container/container-index'
import InputContainer from 'components/atoms/input-container/input-container-index'
import Section from 'components/atoms/section/section-index'
import Header from 'components/molecules/header/header-index'
import Main from 'components/molecules/main/main-index'
import Button from 'components/particles/button/button-index'
import Label from 'components/particles/label/label-index'
import Logo from 'components/particles/logo/logo-index'
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
        <InputContainer placeholder="Digite o seu e-mail" type="text" showLabel={true}>E-mail</InputContainer>
        <InputContainer placeholder="Digite a sua senha" type="password" showLabel={true}>Senha</InputContainer>
        <Button>ENTRAR</Button>
      </Section>       
    </Main>
    </>
  )
}
