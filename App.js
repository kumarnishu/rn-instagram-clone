import { useContext } from "react";
import { SignInStack, SignOutStack } from "./Navigation";
import { UserContext, UserProvider } from "./contexts/UserContext";


export default function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  )
}

function Main() {
  const { user } = useContext(UserContext)
  return <>
    {user ? <SignInStack /> : <SignOutStack />}
  </>
}
