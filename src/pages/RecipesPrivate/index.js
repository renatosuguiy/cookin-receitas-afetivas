import { Box } from "@chakra-ui/layout";
import { AddIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";

import Menu from "../../components/Menu";
import HeaderLogo from "../../components/HeaderLogo/index";
import EmptyPage from "../../components/EmptyPage";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { SearchBox } from "../../components/SearchBox";
import { CardsList } from "../../components/CardsList";

import { useHistory } from "react-router";
import { useMediaQuery } from "@mui/material";
import { useMyRecipes } from "../../providers/MyRecipes";

const RecipesPrivate = () => {
  const {
    myRecipes,
    searchForRecipePrivate,
    recipesPrivateFound,
    setRecipesPrivateFound,
  } = useMyRecipes();

  const history = useHistory();

  const isLagerThan480 = useMediaQuery("(min-width: 480px)");

  return (
    <Box>
      <HeaderWelcome />
      <HeaderLogo />
      <Menu index={1} />
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
          {isLagerThan480 ? (
            <Box w="250px" margin="0 auto">
              <Button
                bg="orange.200"
                h="54px"
                w="250px"
                color="white.50"
                mt="6"
                onClick={() => history.push("/addRecipe")}
              >
                Cadastrar receita
              </Button>
            </Box>
          ) : (
            <IconButton
              size="lg"
              color="white.50"
              backgroundColor="orange.700"
              borderRadius="100%"
              position="fixed"
              bottom="10px"
              left="10px"
              icon={<AddIcon />}
              onClick={() => history.push("/addRecipe")}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default RecipesPrivate;
