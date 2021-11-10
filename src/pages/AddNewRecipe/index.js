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
import { Link } from "react-router-dom";

const AddNewRecipe = () => {
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
        <Input placeholder="&nbsp;Nome da receita" m="10px auto" w="80%" />
        <Text fontSize="md">Selecione a categoria da sua receita</Text>
        <Select
          placeholder="&nbsp;Categoria da sua receita"
          variant="outline"
          w="80%"
          m="10px auto"
          borderColor="gray"
        >
          <option value="salgado">Salgado</option>
          <option value="doce">Doce</option>
          <option value="bebida">Bebida</option>
        </Select>
      </Grid>
      <Button colorScheme="orange" color="white" marginTop="20px">
        <Link to="/addRecipe2">Prosseguir</Link>
      </Button>
    </Container>
  );
};

export default AddNewRecipe;
