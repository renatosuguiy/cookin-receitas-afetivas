import { Box } from "@chakra-ui/layout";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useSharedRecipes } from "../../providers/recipes";
import HeaderLogo from "../../components/HeaderLogo/index";
import { SearchBox } from "../../components/SearchBox";
import Menu from "../../components/Menu";
import { CardsList } from "../../components/CardsList";
import { useEffect, useState } from "react";
import { useMyRecipes } from "../../providers/MyRecipes";

const RecipesShared = () => {
  const {
    recipes,
    recipesSharedFound,
    getSharedRecipes,
    setRecipesSharedFound,
    searchForRecipePublic,
  } = useSharedRecipes();

  const { getMyRecipes } = useMyRecipes();
  const localToken = localStorage.getItem("@cookin:accessToken") || "";
  const [loading, setLoading] = useState(true);

  const user = localStorage.getItem("@cookin:user") || "";
  const userId = JSON.parse(user).id;

  useEffect(() => {
    getSharedRecipes(localToken).then((_) => setLoading(false));
    getMyRecipes(localToken, userId);
  }, []);

  return (
    <Box>
      <Box>
        <HeaderWelcome />
        <HeaderLogo />
        <Menu index={0} />
        <SearchBox functionToSearch={searchForRecipePublic} />
      </Box>
      <Box>
        <CardsList
          state={recipes}
          stateOfSearchedRecipes={recipesSharedFound}
          setStateOfSearchedRecipes={setRecipesSharedFound}
          typeCard='heart'
          loading={loading}
        />
      </Box>
    </Box>
  );
};

export default RecipesShared;
