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

const AddItens = ({
  array,
  setArray,
  buttonText,
  handleClick,
  handleBack,
  title,
  secondaryTitle,
}) => {
  const { addToArray, removeFromArray, item, setItem } = useAddRecipe();

  return (
    <Container centerContent minWidth="320px">
      <Heading size="lg" color="orange.700" m="10px auto 0px">
        Cadastrar receita
      </Heading>
      <Button onClick={handleBack}>Voltar</Button>
      <Grid m="0px" p="20px" w="100%" textAlign="center">
        <Text fontSize="lg" m="0px auto">
          {title}
        </Text>
        <Box>
          <Input
            placeholder="Ingrediente"
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
            onClick={() => addToArray(array, setArray, item)}
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
          {secondaryTitle}
        </Text>
        {array.map((item, index) => (
          <Box
            key={index}
            boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.4)"
            display="flex"
            m="5px auto"
            p="10px"
            border="1px solid gray"
            borderRadius="25px"
          >
            <Text m="0px 10px">{item}</Text>
            <Button
              key={index}
              colorScheme="red"
              size="xs"
              fontSize="md"
              borderRadius="20px"
              onClick={() => removeFromArray(array, setArray, item)}
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
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </Container>
  );
};

export default AddItens;
