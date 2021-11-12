import { List, ListItem, ListIcon, Heading, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@mui/material";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { useHistory } from "react-router";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { FaShareAlt, FaArrowAltCircleLeft } from "react-icons/fa";

import HeaderLogo from "../../components/HeaderLogo";
import { HeaderWelcome } from "../../components/HeaderWelcome";

import {
  BoxAuthor,
  BoxIconLogout,
  BoxIconsButton,
  ContainerHeader,
  ContainerIngredients,
  ContainerInstructions,
  ContainerRecipes,
  ListInstructions,
  ListOrdered,
} from "./styles";

import { useSharedRecipes } from "../../providers/recipes";

const RecipeDetails = () => {
  const history = useHistory();
  const { recipeDetails } = useSharedRecipes();

  const user = localStorage.getItem("@cookin:user") || "";
  const userId = JSON.parse(user).id;
  console.log(userId);

  const isTheOwner = userId === recipeDetails.userId;

  const isInFavorites = recipeDetails.favorites_users?.some(
    (id) => id === userId
  );

  const isLagerThan768 = useMediaQuery("(min-width: 768px)");

  const styleList = {
    width: "290px",
    marginLeft: "10px",
    display: "flex",
    flexWrap: "wrap",
    padding: "10px 0px",
    "@media screen and (min-width: 500px)": {
      width: "620px",
      margin: "0 auto",
    },
  };

  const styleListItem = {
    width: "290px",
    padding: "5px 0px",
    display: "flex",
    alignItems: "center",
    "@media screen and (min-width: 500px)": {
      width: "310px",
    },
  };

  const styleTitle = {
    marginLeft: "10px",
    "@media screen and (min-width: 500px)": {
      marginLeft: "40px",
    },
  };

  return (
    <>
      {isLagerThan768 ? <HeaderWelcome /> : <></>}
      {isLagerThan768 ? <HeaderLogo /> : <></>}
      <ContainerRecipes>
        <ContainerHeader>
          <Heading as="h1" size="lg" color="orange.400">
            {recipeDetails.title}
          </Heading>
          <BoxAuthor>
            <Text>Receita de &nbsp;</Text>
            <Text color="pink.400">{recipeDetails.author}</Text>
          </BoxAuthor>
          <BoxIconLogout>
            <button onClick={() => history.push("/recipes")}>
              <FaArrowAltCircleLeft />
            </button>
          </BoxIconLogout>
          <BoxIconsButton>
            {!isTheOwner ? (
              isInFavorites ? (
                <button /*Falta onClick para favoritar*/>
                  <AiFillHeart style={{ color: "#EB1616" }} />
                </button>
              ) : (
                <button /*Falta onClick para favoritar*/>
                  <AiFillHeart style={{ color: "#979797" }} />
                </button>
              )
            ) : (
              <>
                <button /*Falta onClick para compartilhar*/>
                  <FaShareAlt style={{ color: "#C8561F" }} />
                </button>
                <button /*Falta onClick para excluir*/>
                  <AiOutlineClose style={{ color: "#EB1616" }} />
                </button>
              </>
            )}
          </BoxIconsButton>
        </ContainerHeader>
        <ContainerIngredients>
          <Heading as="h2" size="md" color="orange.400" sx={styleTitle}>
            Ingredientes
          </Heading>
          <List sx={styleList}>
            {recipeDetails.ingredients?.map((item, index) => (
              <ListItem key={index} sx={styleListItem}>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                {item}
              </ListItem>
            ))}
          </List>
        </ContainerIngredients>
        <ContainerInstructions>
          <Heading as="h2" size="md" color="orange.400" sx={styleTitle}>
            Modo de Preparo
          </Heading>
          <ListInstructions>
            <List>
              {recipeDetails.instructions?.map((item, index) => (
                <ListItem key={index} sx={{ padding: "5px 0px" }}>
                  <ListOrdered>{index + 1}</ListOrdered>
                  {item}
                </ListItem>
              ))}
            </List>
          </ListInstructions>
        </ContainerInstructions>
      </ContainerRecipes>
    </>
  );
};

export default RecipeDetails;
