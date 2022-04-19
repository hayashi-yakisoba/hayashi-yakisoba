import * as React from "react";
import { useRoutes } from "react-router-dom";
import Account from "@/pages/account";
import SignIn from "@/pages/signin";
import SignUp from "@/pages/signup";
import Top from "@/pages/top"

const App = () => {
  const element = useRoutes([
    { path: "/", element: <Top /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/account", element: <Account /> },
  ]);

  return element;
}

export default App;
