import {
  Container,
  Box,
  Text,
  Input,
  Button,
  Grid,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { FaPlusCircle } from "react-icons/fa";

const NewRecipePage03 = () => {
  const concluir = () => {
    return (
      <Alert status="success">
        <AlertIcon />
        Receita criada com sucesso!
      </Alert>
    );
  };
  return (
    <Container centerContent minWidth="320px">
      <Text fontSize="35px" color="#F16623" margin="10px auto 0px">
        Cadastrar receita
      </Text>

      <Grid as="form" m="0px" p="20px" w="100%" textAlign="center">
        <Text fontSize="lg" m="0px auto">
          Adicione o modo de preparo
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
          Passos adicionados
        </Text>
        <Box
          boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.4)"
          display="flex"
          m="5px auto"
          p="10px"
          border="1px solid gray"
          borderRadius="25px"
        >
          <Text m="0px 10px">Instrução</Text>
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
          <Text m="0px 10px">Instrução</Text>
          <Button colorScheme="red" size="xs" fontSize="md" borderRadius="20px">
            X
          </Button>
        </Box>
      </Grid>
      <Button
        colorScheme="orange"
        color="white"
        marginTop="20px"
        onClick={() => concluir()}
      >
        Concluir
      </Button>
    </Container>
  );
};

export default NewRecipePage03;
