import {
  Container,
  Box,
  Text,
  Input,
  Button,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";
import { useAddRecipe } from "../../providers/AddRecipe";

const NewRecipePage03 = () => {
  const {
    recipeBody,
    setRecipeBody,
    addToArray,
    removeFromArray,
    instructions,
    setInstructions,
    item,
    setItem,
  } = useAddRecipe();

  const concluir = () => {
    setRecipeBody({ ...recipeBody, ingredients: [...instructions] });
    console.log(recipeBody);
  };
  return (
    <Container centerContent minWidth="320px">
      <Heading size="lg" color="orange.700" m="10px auto 0px">
        Cadastrar receita
      </Heading>

      <Grid m="0px" p="20px" w="100%" textAlign="center">
        <Text fontSize="lg" m="0px auto">
          Adicione o modo de preparo
        </Text>
        <Box>
          <Input
            placeholder="Instrução"
            m="10px auto"
            w="70%"
            borderColor="gray"
            onChange={(e) => setItem(e.target.value)}
          />
          <Button
            colorScheme="transparent"
            size="sm"
            fontSize="2xl"
            color="green.500"
            borderRadius="25px"
            onClick={() => addToArray(instructions, setInstructions, item)}
          >
            <FaPlusCircle />
          </Button>
        </Box>
      </Grid>
      <Grid
        m="0px auto 5px"
        p="20px"
        w="100%"
        textAlign="center"
        border="1px solid gray"
        borderRadius="25px"
      >
        <Text fontSize="xl" m="5px auto 10px" color="orange.700">
          Passos adicionados
        </Text>
        {instructions.map((instruction, index) => (
          <Box
            key={index}
            boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.4)"
            display="flex"
            m="5px auto"
            p="10px"
            border="1px solid gray"
            borderRadius="25px"
          >
            <Text m="0px 10px">{instruction}</Text>
            <Button
              key={index}
              colorScheme="red"
              size="xs"
              fontSize="md"
              borderRadius="20px"
              onClick={() =>
                removeFromArray(instructions, setInstructions, instruction)
              }
            >
              X
            </Button>
          </Box>
        ))}
      </Grid>
      <Button
        colorScheme="orange"
        color="white"
        marginTop="20px"
        onClick={concluir}
      >
        Concluir
      </Button>
    </Container>
  );
};

export default NewRecipePage03;
