import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { Alert, AlertIcon } from "@chakra-ui/react";

export const MyRecipesContext = createContext();

export const MyRecipesProvider = ({ children }) => {
  const [myRecipes, setMyRecipes] = useState([]);
  const token = 0; //pegar o token do localStorage
  const userId = 1; //pegar o userId do localStorage

  const getMyRecipes = () => {
    api
      .get(`/myrecipes?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setMyRecipes([...response.data]))
      .catch((error) => console.log(error));
  };

  const addRecipe = (recipe) => {
    api
      .post(`/myrecipes`, recipe, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMyRecipes([...response.data]);
        return (
          <Alert status="success" variant="solid">
            <AlertIcon />
            Receita adicionada com sucesso!
          </Alert>
        );
      })
      .catch((error) => console.log(error));
  };

  const deleteRecipe = (recipeId) => {
    api
      .delete(`/myrecipes/${recipeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => (
        <Alert status="info" variant="left-accent">
          <AlertIcon />
          Receita deletada.
        </Alert>
      ))
      .catch((error) => console.log(error));
  };

  //   const editRecipe = (recipeId) => {
  //     api
  //       .patch(`/myrecipes/${recipeId}`, )
  //       .then((response) => console.log(response))
  //       .catch((error) => console.log(error));
  //   };

  return (
    <MyRecipesContext.Provider
      value={{ myRecipes, getMyRecipes, addRecipe, deleteRecipe }}
    >
      {children}
    </MyRecipesContext.Provider>
  );
};

export const useMyRecipes = () => {
  return useContext(MyRecipesContext);
};
