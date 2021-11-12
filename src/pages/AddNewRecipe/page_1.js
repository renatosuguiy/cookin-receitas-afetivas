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
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useAddRecipe } from "../../providers/AddRecipe";

const NewRecipePage01 = () => {
  const history = useHistory();
  const { recipeBody, setRecipeBody } = useAddRecipe();
  const { id } = JSON.parse(localStorage.getItem("@cookin:user") || "");

  const nextPage = () => {
    history.push("/addRecipe2");
    setRecipeBody({ ...recipeBody, userId: id });
  };

  return (
    <Container centerContent minWidth="320px">
      <Heading size="lg" color="orange.700" m="10px auto 0px">
        Cadastrar receita
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
          placeholder="&nbsp;Nome da receita"
          m="10px auto"
          w="80%"
          onChange={(e) =>
            setRecipeBody({ ...recipeBody, title: e.target.value })
          }
        />
        <Text fontSize="md">Selecione a categoria da sua receita</Text>
        <Select
          placeholder="&nbsp;Categoria da sua receita"
          variant="outline"
          w="80%"
          m="10px auto"
          borderColor="gray"
          onChange={(e) => {
            setRecipeBody({ ...recipeBody, category: e.target.value });
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
  );
};

export default NewRecipePage01;