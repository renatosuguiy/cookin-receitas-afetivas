import { createContext, useState, useContext, useCallback } from "react";
import { api } from "../../services/api";
import { useToast } from "@chakra-ui/toast";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [recipesSharedFound, setRecipesSharedFound] = useState([]);
  const [recipesFavoritesFound, setRecipesFavoritesFound] = useState([]);

  const localToken = localStorage.getItem("@cookin:accessToken") || "";

  const [recipeDetails, setRecipeDetails] = useState({});
  const [recipePrivateDetails, setPrivateRecipeDetails] = useState({});
  const [recipeFavorites, setRecipeFavorites] = useState([]);

  const toast = useToast();

  const getSharedRecipes = async (token) => {
    await api
      .get("/recipes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRecipes([...response.data]);
      })
      .catch((error) => console.log(error));
  };

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
        setRecipes([...recipes, response.data]);
        getSharedRecipes(localToken);

        toast({
          title: "Receita compartilhada!",
          description: "Receita compartilhada com sucesso.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Receita não compartilhada!",
          description: "A receita não foi compartilhada.",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  const deleteOrUnshareSharedRecipes = (id, token) => {
    api
      .delete(`/recipes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        getSharedRecipes(localToken);

        toast({
          title: "Receita descompartilhada!",
          description: "Receita descompartilhada com sucesso.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Receita não descompartilhada!",
          description: "A receita não foi descompartilhada.",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  const searchForRecipePublic = useCallback(async (recipeTitle, token) => {
    if (recipeTitle !== "") {
      const response = await api.get(`/recipes?title_like=${recipeTitle}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data.length) {
        toast({
          title: "Nenhuma receita encontrada!",
          description: "Procure por outra receita.",
          status: "warning",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      }
      setRecipesSharedFound(response.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const getPrivateRecipeDetails = (recipeId, token) => {
    api
      .get(`/myRecipes/${recipeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPrivateRecipeDetails(response.data);
      })
      .catch((error) => console.log(error));
  };

  const addToFavoriteRecipes = async (userId, recipeId, token) => {
    const recipe = recipes.filter((item) => item.id === Number(recipeId));
    const userIdList = recipe.map((item) => item.favorites_users);

    const isFavorite = userIdList?.some((item) => item === userId);

    !isFavorite && userIdList.push(userId);

    const data = {
      favorites_users: userIdList,
    };

    await api
      .patch(`/recipes/${recipeId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getSharedRecipes(token);
        getRecipeDetails(recipeId, token);
        toast({
          title: "Adicionada!",
          description: "Receita Adicionada ao Favoritos.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        setRecipesSharedFound([]);
        setRecipesFavoritesFound([]);
      })
      .catch((error) => console.log(error));
  };

  const removeFromFavoriteRecipes = async (userId, recipeId, token) => {
    const recipe = recipes.filter((item) => item.id === Number(recipeId));
    const userIdList = recipe.map((item) => item.favorites_users);

    const newUserIdList = userIdList.filter((item) => item !== userId);

    const data = {
      favorites_users: newUserIdList,
    };

    await api
      .patch(`/recipes/${recipeId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getSharedRecipes(token);
        getRecipeDetails(recipeId, token);
        toast({
          title: "Removida!",
          description: "Receita Removida do Favoritos.",
          status: "warning",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        setRecipesSharedFound([]);
        setRecipesFavoritesFound([]);
      })
      .catch((error) => console.log(error));
  };

  const getFavoriteRecipes = async (userId) => {
    const favoriteRecipes = recipes.filter((item) =>
      item.favorites_users.find((id) => id === userId)
    );
    setRecipeFavorites(favoriteRecipes);

  };

  function filterFavoriteRecipes(array, query) {
    return array.filter(function (el) {
      return el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }

  const searchForRecipeFavorite = (recipeTitle, token) => {
    if (recipeTitle !== "") {
      const searchResult = filterFavoriteRecipes(recipeFavorites, recipeTitle);
      if (!searchResult.length) {
        toast({
          title: "Nenhuma receita encontrada!",
          description: "Procure por outra receita.",
          status: "warning",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      }
      setRecipesFavoritesFound(searchResult);
    }
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
        recipeFavorites,
        getFavoriteRecipes,
        addToFavoriteRecipes,
        removeFromFavoriteRecipes,
        searchForRecipePublic,
        recipesSharedFound,
        setRecipesSharedFound,
        searchForRecipeFavorite,
        recipesFavoritesFound,
        setRecipesFavoritesFound,
        recipePrivateDetails,
        getPrivateRecipeDetails,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useSharedRecipes = () => {
  return useContext(RecipesContext);
};
