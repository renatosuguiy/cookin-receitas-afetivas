import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useMediaQuery } from "@mui/material";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { FaShareAlt, FaArrowAltCircleLeft } from "react-icons/fa";

import HeaderLogo from "../../components/HeaderLogo";
import {
  BoxAuthor,
  BoxIconLogout,
  BoxIconsButton,
  ContainerHeader,
  ContainerIngredients,
  ContainerInstructions,
  ContainerRecipes,
  ListInstructions,
} from "./styles";
import { HeaderWelcome } from "../../components/HeaderWelcome";
import { useSharedRecipes } from "../../providers/recipes";

const RecipeDetails = () => {
  const { recipeDetails } = useSharedRecipes();
  const isInFavorites = recipeDetails.favorites_users?.some(
    (id) => id === recipeDetails.userId
  );
  console.log(recipeDetails.favorites_users);

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
            <button>
              <FaArrowAltCircleLeft
                style={{ fontSize: "30px", color: "#C8561F" }}
              />
            </button>
          </BoxIconLogout>
          <BoxIconsButton>
            <button>
              <FaShareAlt style={{ fontSize: "18px", color: "#C8561F" }} />
            </button>
            {isInFavorites ? (
              <button>
                <AiFillHeart style={{ fontSize: "20px", color: "#EB1616" }} />
              </button>
            ) : (
              <button>
                <AiFillHeart style={{ fontSize: "20px", color: "#979797" }} />
              </button>
            )}
            <button>
              <AiOutlineClose style={{ fontSize: "20px", color: "#EB1616" }} />
            </button>
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
            <OrderedList>
              {recipeDetails.instructions?.map((item, index) => (
                <ListItem key={index} sx={{ padding: "5px 0px" }}>
                  {item}
                </ListItem>
              ))}
            </OrderedList>
          </ListInstructions>
        </ContainerInstructions>
      </ContainerRecipes>
    </>
  );
};

export default RecipeDetails;
