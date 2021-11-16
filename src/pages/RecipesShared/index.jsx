import { Box, Grid } from "@chakra-ui/layout";
import { CardRecipes } from "../../components/Card";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useSharedRecipes } from "../../providers/recipes";
import HeaderLogo from "../../components/HeaderLogo/index";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const RecipesShared = () => {
  const { recipes } = useSharedRecipes();

  return (
    <>
      <Box>
        <HeaderWelcome />
        <HeaderLogo />
        <Menu />
        <Grid
          w={["", "", "", "65vw"]}
          m="0 auto"
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={10}
          paddingX="8"
          mt="8"
        >
          {recipes.map((item) => (
            <CardRecipes key={item.id} item={item} typeCard="heart" />
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default RecipesShared;
