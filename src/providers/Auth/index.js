import { useState, useContext, createContext, useCallback } from "react";
import { useHistory } from "react-router";

import {api} from '../../services/api'

const AuthContext = createContext();

const useAuth = () => {

     const context = useContext(AuthContext);

    return context
}

const AuthProvider = ({children}) => {

    const history = useHistory()

    const [authToken, setAuthToken] = useState(localStorage.getItem("@cookin:accessToken") || "");
    const [user, setUser] = useState(localStorage.getItem("@cookin:username") || "");

  const login = async ({ email, password }) => {
    api
      .post("/login", {email, password})
      .then((response) => {
        localStorage.setItem("@cookin:accessToken", response.data.token);
        localStorage.setItem("@cookin:username", JSON.stringify(response.data.user));
        setAuthToken(response.data.token);
        setUser(response.data.user)
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const signUp = async (userData) => {
      console.log(userData)
    api 
      .post("/register", userData)
      .then((response) => {
        localStorage.setItem("@cookin:accessToken", response.data.token);
localStorage.setItem("@cookin:username", JSON.stringify(response.data.user));
        setAuthToken(response.data.token);
        setUser(response.data.user)
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
   localStorage.removeItem("@cookin:accessToken");
   localStorage.removeItem("@cookin:username");
    setAuthToken("");
    history.push("/");
  };
           
    return (
     
        <AuthContext.Provider value={{logout, login, authToken, user, signUp}} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }    










 // const [data, setData] = useState(() => {

    //     const accessToken = localStorage.getItem("@cookin:accessToken");
    //     const user = localStorage.getItem("@cookin:username");

    //     if(accessToken && user){
    //         return {accessToken, user: JSON.parse(user)};
    //     }
    //     return {};
    // })


    // const login = useCallback(async ({ email, password }) => {
    //     const response = await api.post("/login", { email, password });
    
    //     const { accessToken, user } = response.data;
    
    //     localStorage.setItem("@cookin:accessToken", accessToken);
    //     localStorage.setItem("@cookin:username", JSON.stringify(user));
    
    //     setData({ accessToken, user });
    //     history("/");
    //   }, []);
    
    //   const logout = useCallback(() => {
    //     localStorage.removeItem("@Doit:accessToken");
    //     localStorage.removeItem("@Doit:user");
    //     setData({});
    //   }, []);


