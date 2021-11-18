import { Box } from "@chakra-ui/layout";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useSharedRecipes } from "../../providers/recipes";
import HeaderLogo from "../../components/HeaderLogo/index";
import { SearchBox } from "../../components/SearchBox";
import Menu from "../../components/Menu";
import { CardsList } from "../../components/CardsList";
import { useEffect } from "react";
import EmptyFavoritesPage from "../../components/EmptyFavoritesPage";
import { fadeAnimation } from "../../styles/animations";

const RecipesFavorite = () => {
  const {
    recipes,
    recipeFavorites,
    getFavoriteRecipes,
    searchForRecipeFavorite,
    recipesFavoritesFound,
    setRecipesFavoritesFound,
    getSharedRecipes,
  } = useSharedRecipes();

  const user = localStorage.getItem("@cookin:user") || "";
  const token = localStorage.getItem("@cookin:accessToken");
  const userId = JSON.parse(user).id;

  useEffect(() => {
    getSharedRecipes(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getFavoriteRecipes(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes]);

  return (
    <Box>
      <HeaderWelcome />
      <HeaderLogo />
      <Menu index={2} />
      {recipeFavorites.length === 0 ? (
        <EmptyFavoritesPage />
      ) : (
        <>
          <SearchBox
            functionToSearch={searchForRecipeFavorite}
            animation={fadeAnimation}
          />
          <CardsList
            state={recipeFavorites}
            stateOfSearchedRecipes={recipesFavoritesFound}
            setStateOfSearchedRecipes={setRecipesFavoritesFound}
            typeCard="heart"
          />
        </>
      )}
    </Box>
  );
};

export default RecipesFavorite;
