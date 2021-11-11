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
import { Link } from "react-router-dom";

const NewRecipePage02 = () => {
  return (
    <Container centerContent minWidth="320px">
      <Heading size="lg" color="orange.700" m="10px auto 0px">
        Cadastrar receita
      </Heading>

      <Grid as="form" m="0px" p="20px" w="100%" textAlign="center">
        <Text fontSize="lg" m="0px auto">
          Adicione os ingredientes
        </Text>
        <Box>
          <Input
            placeholder="Ingrediente"
            m="10px auto"
            w="70%"
            borderColor="gray"
          />
          <Button
            colorScheme="transparent"
            size="sm"
            fontSize="2xl"
            color="green.500"
            borderRadius="25px"
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
          Ingredientes selecionados
        </Text>
        <Box
          boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.4)"
          display="flex"
          m="5px auto"
          p="10px"
          border="1px solid gray"
          borderRadius="25px"
        >
          <Text m="0px 10px">Ingrediente</Text>
          <Button colorScheme="red" size="xs" fontSize="md" borderRadius="20px">
            X
          </Button>
        </Box>

        <Box
          boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.4)"
          display="flex"
          m="5px auto"
          p="10px"
          border="1px solid gray"
          borderRadius="25px"
        >
          <Text m="0px 10px">Ingrediente</Text>
          <Button colorScheme="red" size="xs" fontSize="md" borderRadius="20px">
            X
          </Button>
        </Box>
      </Grid>
      <Button colorScheme="orange" color="white" marginTop="20px">
        <Link to="/addRecipe3">Prosseguir</Link>
      </Button>
    </Container>
  );
};

export default NewRecipePage02;
