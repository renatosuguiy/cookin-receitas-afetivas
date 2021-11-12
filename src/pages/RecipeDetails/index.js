import {
  List,
  ListItem,
  ListIcon,
  Heading,
  Text,
  Circle,
  Box,
} from "@chakra-ui/react";
import { useMediaQuery } from "@mui/material";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { useHistory } from "react-router";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { FaShareAlt, FaArrowAltCircleLeft } from "react-icons/fa";

import HeaderLogo from "../../components/HeaderLogo";
import { HeaderWelcome } from "../../components/HeaderWelcome";

import { useSharedRecipes } from "../../providers/recipes";

const RecipeDetails = () => {
  const history = useHistory();
  const { recipeDetails } = useSharedRecipes();

  const user = localStorage.getItem("@cookin:user") || "";
  const userId = JSON.parse(user).id;

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

  const containerRecipes = {
    width: "100%",
    margin: "0 auto",
    position: "relative",
    "@media screen and (min-width: 500px)": {
      width: "700px",
    },
  };

  const boxHeader = {
    width: "100%",
    padding: "20px",
    paddingTop: "60px",
    color: "gray.900",
    backgroundColor: "orange.50",
    "@media screen and (min-width: 500px)": {
      width: "450px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "white.50",
    },
  };

  const boxInstructions = {
    width: "300px",
    marginLeft: "10px",
    padding: "10px 0px",
    "@media screen and (min-width: 500px)": {
      width: "620px",
      margin: "0 auto",
    },
  };

  const boxIngredients = {
    paddingTop: "10px",
    "@media screen and (min-width: 500px)": {
      borderTop: "1px solid #c0c0c0",
      borderBottom: "1px solid #c0c0c0",
    },
  };

  const boxIconLogout = {
    display: "flex",
    position: "absolute",
    left: "20px",
    top: "18px",
    fontSize: "30px",
    color: "orange.700",
    "@media screen and (min-width: 500px)": {
      left: "5px",
      top: "50px",
    },
  };

  const boxIconsButton = {
    display: "flex",
    position: "absolute",
    right: "10px",
    top: "8px",
    fontSize: "18px",
    "@media screen and (min-width: 500px)": {
      right: "5px",
      top: "40px",
    },
  };

  return (
    <>
      {isLagerThan768 ? <HeaderWelcome /> : <></>}
      {isLagerThan768 ? <HeaderLogo /> : <></>}
      <Box sx={containerRecipes}>
        <Box sx={boxHeader}>
          <Heading as="h1" size="lg" color="orange.400">
            {recipeDetails.title}
          </Heading>
          <Box display="flex" padding="10px 0px">
            <Text>Receita de &nbsp;</Text>
            <Text color="pink.400">{recipeDetails.author}</Text>
          </Box>
          <Box sx={boxIconLogout}>
            <Box as="button" onClick={() => history.push("/recipes")}>
              <FaArrowAltCircleLeft />
            </Box>
          </Box>
          <Box sx={boxIconsButton}>
            {!isTheOwner ? (
              isInFavorites ? (
                <Box
                  as="button"
                  margin="2px"
                  borderRadius="100%"
                  padding="10px"
                  backgroundColor="#ededed"
                  boxShadow="0 0 0.4em #ededed"
                  /*Falta onClick para favoritar*/
                >
                  <AiFillHeart style={{ color: "#EB1616" }} />
                </Box>
              ) : (
                <Box
                  as="button"
                  margin="2px"
                  borderRadius="100%"
                  padding="10px"
                  backgroundColor="#ededed"
                  boxShadow="0 0 0.4em #ededed"
                  /*Falta onClick para favoritar*/
                >
                  <AiFillHeart style={{ color: "#979797" }} />
                </Box>
              )
            ) : (
              <>
                <Box
                  as="button"
                  margin="2px"
                  borderRadius="100%"
                  padding="10px"
                  backgroundColor="#ededed"
                  boxShadow="0 0 0.4em #ededed"
                  /*Falta onClick para compartilhar*/
                >
                  <FaShareAlt style={{ color: "#C8561F" }} />
                </Box>
                <Box
                  as="button"
                  margin="2px"
                  borderRadius="100%"
                  padding="10px"
                  backgroundColor="#ededed"
                  boxShadow="0 0 0.4em #ededed"
                  /*Falta onClick para excluir*/
                >
                  <AiOutlineClose style={{ color: "#EB1616" }} />
                </Box>
              </>
            )}
          </Box>
        </Box>
        <Box sx={boxIngredients}>
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
        </Box>
        <Box paddingTop="10px">
          <Heading as="h2" size="md" color="orange.400" sx={styleTitle}>
            Modo de Preparo
          </Heading>
          <Box sx={boxInstructions}>
            <List>
              {recipeDetails.instructions?.map((item, index) => (
                <ListItem
                  key={index}
                  display="flex"
                  padding="5px 0px"
                  alignItems="center"
                  textAlign="justify"
                >
                  <Circle
                    size="26px"
                    bg="#422040"
                    color="white"
                    marginRight="10px"
                  >
                    {index + 1}
                  </Circle>
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RecipeDetails;
