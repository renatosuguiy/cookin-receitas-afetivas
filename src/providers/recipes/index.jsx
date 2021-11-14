import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { api } from "../../services/api";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const localToken = localStorage.getItem("@cookin:accessToken") || "";

  const [recipeDetails, setRecipeDetails] = useState({});

  const userIdList =
    JSON.parse(localStorage.getItem("@cookin:userIdList")) || [];

  //lendo/puxando receitas públicas
  const getSharedRecipes = (token) => {
    api
      .get("/recipes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log(response.data);
        setRecipes([...response.data]);
      })
      .catch((error) => console.log(error));
  };

  //adicionando receitas públicas (compartilhamento)
  //vou receber de parâmetro o corpo do receita privada e adicionar 2 campos de favorites e id da receita privada
  const shareRecipe = (data, token) => {
    const { title, ingredients, instructions, category, author, userId, id } =
      data;
    api
      .post(
        "/recipes",
        {
          title: title,
          ingredients: ingredients,
          instructions: instructions,
          category: category,
          author: author,
          userId: userId,
          favorites_users: [],
          myrecipesId: id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response.data);
        //toast de sucesso de compartilhamento
        // setRecipes([...recipes,...response.data]);
      })
      .catch((error) => console.log(error));
  };

  //deletando ou retirando compartilhamento de receitas públicas
  const deleteOrUnshareSharedRecipes = (id, token) => {
    api
      .delete(`/recipes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        //toast de sucesso em deletar/descompartilhar
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSharedRecipes(localToken);
  }, []);

  const getRecipeDetails = (recipeId, token) => {
    api
      .get(`/recipes/${recipeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRecipeDetails(response.data);
      })
      .catch((error) => console.log(error));
  };

  const addToFavoriteRecipes = (userId, recipeId, token) => {
    const isFavorite = userIdList.some((item) => item === userId);

    !isFavorite && userIdList.push(userId);
    localStorage.setItem("@cookin:userIdList", JSON.stringify(userIdList));

    const data = {
      favorites_users: userIdList,
    };

    api
      .patch(`/recipes/${recipeId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        getSharedRecipes(token);
        getRecipeDetails(recipeId, token);
        //toast "Receita Adicionada ao Favoritos"
      })
      .catch((error) => console.log(error));
  };

  return (
    <RecipesContext.Provider
      value={{
        getSharedRecipes,
        deleteOrUnshareSharedRecipes,
        shareRecipe,
        recipes,
        setRecipes,
        recipeDetails,
        getRecipeDetails,
        addToFavoriteRecipes,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useSharedRecipes = () => {
  return useContext(RecipesContext);
};
