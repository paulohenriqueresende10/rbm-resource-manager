import AlertContainer from 'components/atoms/alert-container/alert-container-index'
import Container from 'components/atoms/container/container-index'
import InputContainer from 'components/atoms/input-container/input-container-index'
import Text from 'components/particles/text/text-index'
import Section from 'components/atoms/section/section-index'
import Header from 'components/molecules/header/header-index'
import Main from 'components/molecules/main/main-index'
import Wrapper from 'components/molecules/wrapper/wrapper-index'
import ActionLogin from 'components/particles/action-login/action-login-index'
import Button from 'components/particles/button/button-index'
import Logo from 'components/particles/logo/logo-index'
import { useAuth } from "contexts/auth-context";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const { login } = useAuth();

  const handleLogin = () => {
    login(form.login, form.password);
  }

  return (
  <Wrapper>
      <Header>
      <Logo />
    </Header>
    <Main>
      <Container />
      <Section>
      <AlertContainer
        error/>
        <Logo/>
        <Text as='h3' fontSize='20px' fontWeight='700' lineHeight='26px'>Entrar na minha conta</Text>
        <Text as='label' fontSize='14px' fontWeight='400' lineHeight='21px'>Acesse sua conta abaixo =)</Text>
        <InputContainer 
          placeholder="Digite o seu e-mail" 
          type="text" 
          showLabel={true}
          value={form.login} 
          onChange={(e) => setForm((prev) => ({ ...prev, login: e.target.value }))}
          >E-mail
        </InputContainer>
        <InputContainer 
          placeholder="Digite a sua senha" 
          type="password" 
          showLabel={true}
          onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
        >
          Senha</InputContainer>
        <ActionLogin></ActionLogin>
        <Button
          onClick={handleLogin}
        >ENTRAR
        </Button>
        <Text as='label' fontSize='14px' fontWeight='400' lineHeight='21px'><u>Primeiro acesso? <b>Ative sua conta.</b></u></Text>
      </Section>       
    </Main>
  </Wrapper>
  )
}
