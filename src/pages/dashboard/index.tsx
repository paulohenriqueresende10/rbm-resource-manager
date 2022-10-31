import Header from "components/molecules/header/header-index";
import Main from "components/molecules/main/main-index";
import Button from "components/particles/button/button-index";
import { useAuth } from "contexts/auth-context";

export default function Dashboard() {
    const { logout } = useAuth();
  return (
    <div>
      <Header>
        Dashboard 
      </Header>
      <Main>
        <Button
         onClick={logout}
        >
         Logout
        </Button>
      </Main>
    </div>
  )
}
