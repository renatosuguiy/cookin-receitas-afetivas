import ChefImage from "../../assets/Images/chef.svg";
import {
  Container,
  Image,
  Box,
  Text,
  Input,
  Select,
  Button,
  Grid,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useAddRecipe } from "../../providers/AddRecipe";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import HeaderLogo from "../../components/HeaderLogo";
import Menu from "../../components/Menu";
import { HeaderWelcome } from "../../components/HeaderWelcome/index";
import { useToast } from "@chakra-ui/toast";

const NewRecipePage01 = () => {
  const history = useHistory();
  const { recipeBody, setRecipeBody } = useAddRecipe();
  const { id } = JSON.parse(localStorage.getItem("@cookin:user") || "");
  const { name } = JSON.parse(localStorage.getItem("@cookin:user") || "");
  const toast = useToast();

  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeCategory, setRecipeCategory] = useState("");

  const nextPage = () => {
    if (recipeTitle && recipeCategory) {
      setRecipeBody({
        ...recipeBody,
        userId: id,
        author: name,
        title: recipeTitle,
        category: recipeCategory,
      });
      history.push("/addRecipe2");
    } else {
      toast({
        title: "Nome e/ou categoria da receita inválido(s)",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <HeaderWelcome />
      <HeaderLogo />
      <Menu index={1} />
      <Container centerContent minWidth="320px">
        <Heading size="lg" color="orange.700" m="10px auto 0px">
          <Flex>
            <Button
              onClick={() => history.push("/myrecipes")}
              color="#C8561F"
              fontSize="3xl"
              bgColor="transparent"
              colorScheme="none"
              mt="8px"
              position="relative"
              float="left"
              _hover={{ color: "orange.500" }}
            >
              <FaArrowAltCircleLeft />
            </Button>
            <Text m="10px 35px 0px 0px">Cadastrar receita</Text>
          </Flex>
        </Heading>
        <Box width="90%" maxWidth="450px">
          <Image src={ChefImage} alt="Chef" w="70%" m="0px auto" />
        </Box>
        <Grid
          as="form"
          border="1px solid gray"
          borderRadius="25px"
          m="20px"
          p="20px"
          w="90%"
          textAlign="center"
        >
          <Text fontSize="md" m="10px auto">
            Digite o nome da sua receita
          </Text>
          <Input
            isRequired
            placeholder="Nome da receita"
            m="10px auto"
            w="80%"
            focusBorderColor="orange.500"
            onChange={(e) => setRecipeTitle(e.target.value)}
          />
          <Text fontSize="md">Selecione a categoria da sua receita</Text>
          <Select
            focusBorderColor="orange.500"
            placeholder="Categoria da sua receita"
            variant="outline"
            w="80%"
            m="10px auto"
            borderColor="gray"
            onChange={(e) => {
              setRecipeCategory(e.target.value);
            }}
          >
            <option value="salgado">Salgado</option>
            <option value="doce">Doce</option>
            <option value="bebida">Bebida</option>
          </Select>
        </Grid>
        <Button
          colorScheme="orange"
          color="white"
          marginTop="20px"
          onClick={nextPage}
        >
          Prosseguir
        </Button>
      </Container>
    </>
  );
};

export default NewRecipePage01;
