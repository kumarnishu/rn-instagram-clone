import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { SignInStack, SignOutStack } from "./Navigation";
import { auth } from "./firebase";
import { UserContext, UserProvider } from "./contexts/UserContext";


export default function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  )
}

function Main() {
  const { user, setUser } = useContext(UserContext)
  onAuthStateChanged(auth, (remoteUser) => {
    if (remoteUser) {
      setUser(remoteUser)
    }
  });
  return <>
    {user ? <SignInStack /> : <SignOutStack />}
  </>
}
