import { useState, useContext, createContext } from "react";
import { useHistory } from "react-router";

import { api } from "../../services/api";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthProvider = ({ children }) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    localStorage.getItem("@cookin:accessToken") || ""
  );

  const [user, setUser] = useState(localStorage.getItem("@cookin:user") || "");

  const login = async ({ email, password }) => {
    api
      .post("/login", { email, password })
      .then((response) => {
        localStorage.setItem("@cookin:accessToken", response.data.accessToken);
        localStorage.setItem(
          "@cookin:user",
          JSON.stringify(response.data.user)
        );
        setAuthToken(response.data.accessToken);
        setUser(response.data.user);
        history.push("/recipes");
      })
      .catch((err) => console.log(err));
  };

  const signUp = async (userData) => {
    api
      .post("/register", userData)
      .then((response) => {
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("@cookin:accessToken");
    localStorage.removeItem("@cookin:user");
    localStorage.removeItem("@cookin:userIdList");
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ logout, login, authToken, user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
