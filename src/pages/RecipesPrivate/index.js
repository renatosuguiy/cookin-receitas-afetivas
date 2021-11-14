import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useMyRecipes } from "../../providers/MyRecipes";
import HeaderLogo from "../../components/HeaderLogo/index";
import { SearchBox } from "../../components/SearchBox";
import Menu from "../../components/Menu";
import { CardsList } from "../../components/CardsList";

const RecipesPrivate = () => {
  const {
    myRecipes,
    searchForRecipePrivate,
    recipesPrivateFound,
    setRecipesPrivateFound,
  } = useMyRecipes();

  return (
    <Box>
      <HeaderWelcome />
      <HeaderLogo />
      <Menu />
      <SearchBox functionToSearch={searchForRecipePrivate} />
      <CardsList
        state={myRecipes}
        stateOfSearchedRecipes={recipesPrivateFound}
        setStateOfSearchedRecipes={setRecipesPrivateFound}
        typeCard="times"
      />
      <Button bg="orange.200" h="54px" w="250px" color="#ffffff" mt="6">
        Cadastrar receita
      </Button>
    </Box>
  );
};

export default RecipesPrivate;
