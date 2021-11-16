import { Box } from "@chakra-ui/layout";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useSharedRecipes } from "../../providers/recipes";
import HeaderLogo from "../../components/HeaderLogo/index";
import { SearchBox } from "../../components/SearchBox";
import Menu from "../../components/Menu";
import { CardsList } from "../../components/CardsList";
import { useEffect } from "react";

const RecipesShared = () => {
  const {
    recipes,
    recipesSharedFound,
    getSharedRecipes,
    setRecipesSharedFound,
    searchForRecipePublic,
  } = useSharedRecipes();

  const localToken = localStorage.getItem("@cookin:accessToken") || "";

  useEffect(() => {
    getSharedRecipes(localToken);
  }, []);

  return (
    <>
      <Box>
        <HeaderWelcome />
        <HeaderLogo />
        <Menu index={0} />
        <SearchBox functionToSearch={searchForRecipePublic} />
        <CardsList
          state={recipes}
          stateOfSearchedRecipes={recipesSharedFound}
          setStateOfSearchedRecipes={setRecipesSharedFound}
          typeCard="heart"
        />
      </Box>
    </>
  );
};

export default RecipesShared;
