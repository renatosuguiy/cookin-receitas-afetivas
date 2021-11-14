import { Box } from "@chakra-ui/layout";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useSharedRecipes } from "../../providers/recipes";
import HeaderLogo from "../../components/HeaderLogo/index";
import { SearchBox } from "../../components/SearchBox";
import Menu from "../../components/Menu";
import { CardsList } from "../../components/CardsList";
import { useEffect } from "react";

const RecipesFavorite = () => {
  const {
    recipes,
    recipeFavorites,
    recipesSharedFound,
    setRecipesSharedFound,
    searchForRecipePublic,
    getFavoriteRecipes,
  } = useSharedRecipes();

  const user = localStorage.getItem("@cookin:user") || "";
  const userId = JSON.parse(user).id;

  useEffect(() => {
    getFavoriteRecipes(userId);
  }, [recipes]);

  return (
    <Box>
      <HeaderWelcome />
      <HeaderLogo />
      <Menu />
      {recipeFavorites.length === 0 ? (
        <p>Página Vazia</p> //Vou adicionar o componente EmptyFavoritesPage
      ) : (
        <>
          <SearchBox functionToSearch={searchForRecipePublic} />
          <CardsList
            state={recipeFavorites}
            stateOfSearchedRecipes={recipesSharedFound}
            setStateOfSearchedRecipes={setRecipesSharedFound}
            typeCard="heart"
          />
        </>
      )}
    </Box>
  );
};

export default RecipesFavorite;
