import ChefImage from "../../assets/Images/chef.svg";
import {
  Container,
  Image,
  Box,
  Text,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { inputStyle, formBoxStyle } from "../../styles/styles";
import { useHistory } from "react-router";

const NewRecipePage01 = () => {
  const history = useHistory();

  return (
    <Container centerContent minWidth="320px">
      <Text fontSize="35px" color="#F16623" margin="10px auto 0px">
        Cadastrar receita
      </Text>
      <Box width="90%" maxWidth="400px" textAlign="center">
        <Image src={ChefImage} alt="Chef" width="70%" />
      </Box>
      <Box style={formBoxStyle}>
        <Text fontSize="3xl">Digite o nome da sua receita</Text>
        <Input placeholder="&nbsp;Nome da receita" style={inputStyle} />
        <Text fontSize="3xl">Selecione a categoria da sua receita</Text>
        <Select
          placeholder="&nbsp;Categoria da sua receita"
          variant="outline"
          height="50px"
          borderRadius="10px"
          backgroundColor="#ffffff"
        >
          <option value="salgado">Salgado</option>
          <option value="doce">Doce</option>
          <option value="bebida">Bebida</option>
        </Select>
      </Box>
      <Button
        colorScheme="orange"
        color="white"
        onClick={() => history.push("/newrecipe2")}
      >
        Prosseguir
      </Button>
    </Container>
  );
};

export default NewRecipePage01;
