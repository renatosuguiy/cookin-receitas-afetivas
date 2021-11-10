import {
  Container,
  Box,
  Text,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import {
  inputStyle,
  formBoxStyle,
  buttonStyle,
  plusButtonStyle,
  removeButtonStyle,
  ingredientBoxStyle,
} from "../../styles/styles";
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
      <Text fontSize="3xl">Adicione o modo de preparo</Text>
      <Box minWidth="320px" maxWidth="500px">
        <Input placeholder="&nbsp;Instrução" style={inputStyle} />
        <Button style={plusButtonStyle}>
          <FaPlusCircle />
        </Button>
      </Box>
      <Box style={formBoxStyle}>
        <Text fontSize="20px" color="#F16623">
          Passos selecionados
        </Text>
        <Box style={ingredientBoxStyle} fontSize="18px">
          Instrução <Button style={removeButtonStyle}>X</Button>
        </Box>
        <Box style={ingredientBoxStyle} fontSize="18px">
          Instrução <Button style={removeButtonStyle}>X</Button>
        </Box>
        <Box style={ingredientBoxStyle} fontSize="18px">
          Instrução <Button style={removeButtonStyle}>X</Button>
        </Box>
      </Box>
      <Button colorScheme="orange" color="white" onClick={() => concluir()}>
        Concluir
      </Button>
    </Container>
  );
};

export default NewRecipePage03;
