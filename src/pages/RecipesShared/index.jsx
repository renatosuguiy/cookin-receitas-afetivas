import { Box, Grid, Flex, VStack } from "@chakra-ui/layout";
import { CardRecipes } from "../../components/Card";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useSharedRecipes } from "../../providers/recipes";
import HeaderLogo from "../../components/HeaderLogo/index";
import Menu from "../../components/Menu";
import { ButtonClear } from "../../components/ButtonClear";
import { CardsList } from "../../components/CardsList";

const RecipesShared = () => {
  const { recipes } = useSharedRecipes();

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
