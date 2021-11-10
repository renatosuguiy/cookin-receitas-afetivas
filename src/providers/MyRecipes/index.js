import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

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
      .then((response) => setMyRecipes([...response.data]))
      .catch((error) => console.log(error));
  };

  const deleteRecipe = (recipeId) => {
    api
      .delete(`/myrecipes/${recipeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response))
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
