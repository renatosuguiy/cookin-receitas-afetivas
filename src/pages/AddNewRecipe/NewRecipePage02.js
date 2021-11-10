import { Container, Box, Text, Input, Button } from "@chakra-ui/react";
import {
  inputStyle,
  formBoxStyle,
  buttonStyle,
  plusButtonStyle,
  removeButtonStyle,
  ingredientBoxStyle,
} from "./styles";
import { FaPlusCircle } from "react-icons/fa";
import { useHistory } from "react-router";

const NewRecipePage02 = () => {
  const history = useHistory();

  return (
    <Container centerContent minWidth="320px">
      <Text fontSize="35px" color="#F16623" margin="10px auto 0px">
        Cadastrar receita
      </Text>
      <Text fontSize="3xl">Adicione os ingredientes</Text>
      <Box minWidth="320px" maxWidth="500px">
        <Input placeholder="&nbsp;Ingrediente" style={inputStyle} />
        <Button style={plusButtonStyle}>
          <FaPlusCircle />
        </Button>
      </Box>
      <Box style={formBoxStyle}>
        <Text fontSize="20px" color="#F16623">
          Ingredientes selecionados
        </Text>
        <Box style={ingredientBoxStyle} fontSize="18px">
          Ingrediente <Button style={removeButtonStyle}>X</Button>
        </Box>
        <Box style={ingredientBoxStyle} fontSize="18px">
          Ingrediente <Button style={removeButtonStyle}>X</Button>
        </Box>
        <Box style={ingredientBoxStyle} fontSize="18px">
          Ingrediente <Button style={removeButtonStyle}>X</Button>
        </Box>
      </Box>
      <Button style={buttonStyle} onClick={() => history.push("/newrecipe3")}>
        Prosseguir
      </Button>
    </Container>
  );
};

export default NewRecipePage02;
