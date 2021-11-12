import { Box } from "@chakra-ui/layout";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useSharedRecipes } from "../../providers/recipes";
import HeaderLogo from "../../components/HeaderLogo/index";
import { SearchBox } from "../../components/SearchBox";
import Menu from "../../components/Menu";
import { CardsList } from "../../components/CardsList";

const RecipesShared = () => {
  const {
    recipes,
    recipesSharedFound,
    setRecipesSharedFound,
    searchForRecipePublic,
  } = useSharedRecipes();

  return (
    <Box>
      <HeaderWelcome />
      <HeaderLogo />
      <Menu />
      <SearchBox functionToSearch={searchForRecipePublic} />
      <CardsList
        state={recipes}
        stateOfSearchedRecipes={recipesSharedFound}
        setStateOfSearchedRecipes={setRecipesSharedFound}
        typeCard="heart"
      />
    </Box>
  );
};

export default RecipesShared;
