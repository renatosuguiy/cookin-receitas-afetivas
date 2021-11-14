import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useMyRecipes } from "../../providers/MyRecipes";
import HeaderLogo from "../../components/HeaderLogo/index";
import { SearchBox } from "../../components/SearchBox";
import Menu from "../../components/Menu";
import { CardsList } from "../../components/CardsList";
import { useHistory } from "react-router";
import EmptyPage from "../../components/EmptyPage";

const RecipesPrivate = () => {
  const {
    myRecipes,
    searchForRecipePrivate,
    recipesPrivateFound,
    setRecipesPrivateFound,
  } = useMyRecipes();

  const history = useHistory();

  return (
    <Box>
      <HeaderWelcome />
      <HeaderLogo />
      <Menu />
      {myRecipes.length === 0 ? (
        <EmptyPage />
      ) : (
        <>
          <SearchBox functionToSearch={searchForRecipePrivate} />
          <CardsList
            state={myRecipes}
            stateOfSearchedRecipes={recipesPrivateFound}
            setStateOfSearchedRecipes={setRecipesPrivateFound}
            typeCard="times"
          />
          <Box w="250px" margin="0 auto">
            <Button
              bg="orange.200"
              h="54px"
              w="250px"
              color="#ffffff"
              mt="6"
              onClick={() => history.push("/addRecipe")}
            >
              Cadastrar receita
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default RecipesPrivate;
