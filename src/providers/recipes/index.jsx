import {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import { api } from "../../services/api";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [recipesSharedFound, setRecipesSharedFound] = useState([]);
  const localToken = localStorage.getItem("@cookin:accessToken") || "";

  const [recipeDetails, setRecipeDetails] = useState({});

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

  //procurando a receita publica
  const searchForRecipePublic = useCallback(async (recipeTitle, token) => {
    if (recipeTitle !== "") {
      const response = await api.get(`/recipes?title_like=${recipeTitle}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data.length) {
        //chamar o toast de nada encontrado, procure novamente
        console.log("achei nada");
      }
      setRecipesSharedFound(response.data);
    }
  }, []);

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
        searchForRecipePublic,
        recipesSharedFound,
        setRecipesSharedFound,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useSharedRecipes = () => {
  return useContext(RecipesContext);
};
