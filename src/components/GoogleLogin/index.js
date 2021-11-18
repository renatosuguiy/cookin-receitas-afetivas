import { GoogleLogin } from "react-google-login";
import { GoogleHelper } from "./helpers";
import { useLocation } from "react-router";
import { useAuth } from "../../providers/Auth";

const LoginGoogle = () => {
  const { signUp, login } = useAuth();

  const location = useLocation();
  const pathname = location.pathname;

  const handleLogin = (response) => {
    console.log(response);
    const {
      profileObj: { name, email, googleId },
    } = response;

    const dataSignUp = {
      confirmPassword: googleId,
      email: email,
      gender: "Outro",
      name: name,
      password: googleId,
    };

    const dataLogin = {
      email: email,
      password: googleId,
    };

    if (pathname === "/signup") {
      signUp(dataSignUp);
    } else {
      login(dataLogin);
    }
  };

  const { client_id } = GoogleHelper.web;

  return (
    <GoogleLogin
      clientId={client_id}
      buttonText="Continuar com Google"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginGoogle;
