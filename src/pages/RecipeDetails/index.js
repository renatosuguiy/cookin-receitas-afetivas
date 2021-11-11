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

const recipe = {
  title: "Bolo de Laranja Vegano",
  ingredients: [
    "1 laranja em cubos",
    "1/2 xícara de suco de laranja",
    "3/4 de xícara de óleo",
    "1 xícara de açúcar",
    "2 xícaras de farinha de trigo",
    "1 colher de sopa de fermento em pó",
    "Pitada de sal",
  ],
  instructions: [
    "Bater no liquidificador a laranja, o suco, o óleo, o açúcar e o sal e reservar.",
    "Misturar em uma tigela a farinha e o fermento em pó.",
    "Incorporar a mistura do liquidificador na farinha com o fermento.",
    "Colocar a massa em uma forma untada e enfarinhada.",
    "Assar por 40 a 50 minutos em forno pré-aquecido a 180ºC.",
  ],
  category: "doce",
  author: "Mark Zuckerberg",
  myrecipesId: 1,
  userId: 1,
  id: 1,
};

const RecipeDetails = () => {
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
            {recipe.title}
          </Heading>
          <BoxAuthor>
            <Text>Receita de &nbsp;</Text>
            <Text color="pink.400">{recipe.author}</Text>
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
            <button>
              <AiFillHeart style={{ fontSize: "20px", color: "#979797" }} />
            </button>
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
            {recipe.ingredients.map((item) => (
              <ListItem sx={styleListItem}>
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
              {recipe.instructions.map((item, index) => (
                <ListItem sx={{ padding: "5px 0px" }}>{item}</ListItem>
              ))}
            </OrderedList>
          </ListInstructions>
        </ContainerInstructions>
      </ContainerRecipes>
    </>
  );
};

export default RecipeDetails;
