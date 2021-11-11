import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import sweetCategory from "../../assets/Images/category_dessert.svg";
import saltCategory from "../../assets/Images/category_salt.svg";
import drinkCategory from "../../assets/Images/category_drink.svg";
import LoveGray from "../../assets/Images/lovegray.svg";
import LoveRed from "../../assets/Images/lovered.svg";
import TimesDelete from "../../assets/Images/times.svg";
import { useSharedRecipes } from "../../providers/recipes";
import { useHistory } from "react-router";

export const CardRecipes = ({ item, typeCard }) => {
  const isInFavorites = item.favorites_users.some((id) => id === item.userId);
  const localToken = localStorage.getItem("@cookin:accessToken") || "";
  const history = useHistory();

  const { deleteOrUnshareSharedRecipes, getRecipeDetails } = useSharedRecipes();
  //falta puxar informações do provider favoritar receitas e do myrecipes

  const handleDeleteRecipe = (publicId, privateId) => {
    //chama a função que deleta/não_compartilha do minhas receitas públicas
    deleteOrUnshareSharedRecipes(publicId, localToken);

    //falta chamar a função que deleta do minhas receitas privadas
    //função(privateId)--vem do provider myrecipes
  };

  if (typeCard === "heart") {
    return (
      <Flex
        align="center"
        width="310px"
        height="96px"
        borderRadius="10px"
        border="0.5px solid rgba(180, 194, 211, 0.2)"
        boxShadow="base"
        position="relative"
      >
        <Center w="60px" h="60px" bg="white" fontSize="2x1" borderRadius="md">
          {item.category === "doce" && <Image src={sweetCategory} />}
          {item.category === "salgado" && <Image src={saltCategory} />}
          {item.category === "bebida" && <Image src={drinkCategory} />}
        </Center>
        <Box
          ml="4"
          onClick={() => {
            console.log("card");
            getRecipeDetails(item.id, localToken);
            history.push(`/recipes/${item.id}`);
          }} //falta colocar a rota da pagina da receita history.push("/recipes/id")
          _hover={{ cursor: "pointer" }}
        >
          <Heading as="h2" fontSize="lg" color="#0a0a0a">
            {item.title}
          </Heading>
          <Text color="#0a0a0a" fontSize="small" textTransform="capitalize">
            {item.category}
          </Text>
        </Box>
        {!isInFavorites && (
          <Center
            as="button"
            w="28px"
            h="28px"
            borderRadius="100%"
            onClick={() => {
              console.log("coração");
            }} //falta chamar função que coloca o id do user no array favoritesuser (provider)
            border="none"
            bgColor="#ededed"
            position="absolute"
            bottom="12px"
            right="18px"
          >
            <Image src={LoveGray} />
          </Center>
        )}
        {isInFavorites && (
          <Center
            as="button"
            w="28px"
            h="28px"
            borderRadius="100%"
            onClick={() => {
              console.log("coração");
            }} //falta chamar função que remove o id do user no array favoritesuser (provider)
            border="none"
            bgColor="#ededed"
            position="absolute"
            bottom="12px"
            right="18px"
          >
            <Image src={LoveRed} />
          </Center>
        )}
      </Flex>
    );
  }

  if (typeCard === "times") {
    return (
      <Flex
        align="center"
        width="310px"
        height="96px"
        borderRadius="10px"
        border="0.5px solid rgba(180, 194, 211, 0.2)"
        boxShadow="base"
        position="relative"
      >
        <Center w="60px" h="60px" bg="white" fontSize="2x1" borderRadius="md">
          {item.category === "doce" && <Image src={sweetCategory} />}
          {item.category === "salgado" && <Image src={saltCategory} />}
          {item.category === "bebida" && <Image src={drinkCategory} />}
        </Center>
        <Box
          ml="4"
          onClick={() => {
            console.log("card");
            getRecipeDetails(item.id, localToken);
            history.push(`/recipes/${item.id}`);
          }} //falta colocar a rota da pagina da receita history.push("/recipes/id")
          _hover={{ cursor: "pointer" }}
        >
          <Heading as="h2" fontSize="lg" color="#0a0a0a">
            {item.title}
          </Heading>
          <Text color="#0a0a0a" fontSize="small" textTransform="capitalize">
            {item.category}
          </Text>
        </Box>

        <Center
          as="button"
          w="28px"
          h="28px"
          borderRadius="100%"
          onClick={() => {
            handleDeleteRecipe(item.id, item.myrecipesId); //manda como parâmetros a id do item no público e no privado
          }}
          border="none"
          bgColor="#ededed"
          position="absolute"
          bottom="12px"
          right="18px"
        >
          <Image src={TimesDelete} />
        </Center>
      </Flex>
    );
  }
};
