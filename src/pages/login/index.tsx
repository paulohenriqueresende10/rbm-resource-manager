
import Form from 'components/atoms/form/form-index'
import Header from 'components/molecules/header/header-index'
import Main from 'components/molecules/main/main-index'
import Button from 'components/particles/button/button-index'
import Input from 'components/particles/input/input-index'
import Logo from 'components/particles/logo/logo-index'
import React from 'react'

export default function Login() {
  return (
    <>
    <Header>
      <Logo />
    </Header>
    <Main>
      <Form>
        <Logo/>
        <Input />
        <Button>ENTRAR</Button>
      </Form>
    </Main>
    </>
  )
}
