import { createContext, useContext, useState, useCallback } from "react";
import { api } from "../../services/api";
import { useToast } from "@chakra-ui/react";

export const MyRecipesContext = createContext();

export const MyRecipesProvider = ({ children }) => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [recipesPrivateFound, setRecipesPrivateFound] = useState([]);
  const toast = useToast();

  const user = localStorage.getItem("@cookin:user") || "";
  const userLoggedId = JSON.parse(user).id;

  const getMyRecipes = (token, userId) => {
    api
      .get(`/myrecipes?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setMyRecipes([...response.data]))
      .catch((error) => {
        setMyRecipes([]);
      });
  };

  const addRecipe = (recipe, token) => {
    api
      .post(`/myrecipes`, recipe, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMyRecipes([...myRecipes, response.data]);
        toast({
          title: "Receita adicionada",
          description: "Receita adicionada com sucesso!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((error) => console.log(error));
  };

  const deleteRecipe = (recipeId, token, userId) => {
    api
      .delete(`/myrecipes/${recipeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        getMyRecipes(token, userId);
        toast({
          title: "Receita deletada",
          description: "Receita deletada com sucesso!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        setRecipesPrivateFound([]);
      })
      .catch((error) => console.log(error));
  };

  //   const editRecipe = (recipeId) => {
  //     api
  //       .patch(`/myrecipes/${recipeId}`, )
  //       .then((response) => console.log(response))
  //       .catch((error) => console.log(error));
  //   };

  const searchForRecipePrivate = useCallback(async (recipeTitle, token) => {
    if (recipeTitle !== "") {
      const response = await api.get(`/myrecipes?title_like=${recipeTitle}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filteredResult = response.data.filter(
        (item) => item.userId === userLoggedId
      );
      if (!filteredResult.length) {
        toast({
          title: "Nenhuma receita encontrada!",
          description: "Procure por outra receita.",
          status: "warning",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      }

      setRecipesPrivateFound(filteredResult);
    }
  }, []);

  return (
    <MyRecipesContext.Provider
      value={{
        myRecipes,
        getMyRecipes,
        addRecipe,
        deleteRecipe,
        searchForRecipePrivate,
        recipesPrivateFound,
        setRecipesPrivateFound,
      }}
    >
      {children}
    </MyRecipesContext.Provider>
  );
};

export const useMyRecipes = () => {
  return useContext(MyRecipesContext);
};
