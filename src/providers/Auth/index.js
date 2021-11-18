import { useToast } from "@chakra-ui/toast";
import { useState, useContext, createContext } from "react";
import { useHistory } from "react-router";
import { api } from "../../services/api";
import { useMyRecipes } from "../MyRecipes";
import { useSharedRecipes } from "../recipes";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthProvider = ({ children }) => {
  const { setRecipesSharedFound, setRecipesFavoritesFound } =
    useSharedRecipes();
  const { setRecipesPrivateFound } = useMyRecipes();

  const toast = useToast();

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
        toast({
          title: "Login feito com sucesso!",
          description: "Bem-vindo ao Cookin'",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        history.push("/recipes");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Login inválido!",
          description: "Email e/ou senha inválido!",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  const signUp = async (userData) => {
    api
      .post("/register", userData)
      .then((response) => {
        toast({
          title: "Conta criada com sucesso!",
          description: "Faça seu login",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Cadastro inválido!",
          description: "Usuário já existente!",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  const logout = () => {
    localStorage.removeItem("@cookin:accessToken");
    localStorage.removeItem("@cookin:user");
    localStorage.removeItem("@cookin:ingredients");
    localStorage.removeItem("@cookin:instructions");
    setAuthToken("");
    setRecipesSharedFound([]);
    setRecipesPrivateFound([]);
    setRecipesFavoritesFound([]);
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ logout, login, authToken, user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
