import { GoogleLogin } from "react-google-login";
import { GoogleHelper } from "./helpers";
import { useLocation } from "react-router";
import { useState } from "react";
import { useAuth } from "../../providers/Auth";

const LoginGoogle = ({ handleGoogle }) => {

  const { signUp } = useAuth();

   const  [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
  const location = useLocation();

  const handleLogin = (response) => {
  
    const { profileObj: { name, email, googleId } } = response

    setName(name)
    setEmail(email)
    setPassword(googleId)
    setConfirmPassword(googleId)

    const cadastro = { name, email, password, confirmPassword };
console.log(cadastro)
  
    const login = { name, email };

    if (location === "/signup") {
      signUp(cadastro)
      //handleGoogle(cadastro);
    } else {
      handleGoogle(login);
    }
  };

  const { client_id } = GoogleHelper.web;

  return (
    <GoogleLogin
      clientId={client_id}
      buttonText='Continuar com Google'
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginGoogle;
