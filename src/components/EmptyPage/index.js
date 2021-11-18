import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Image,
  Center,
  Stack,
} from "@chakra-ui/react";
import Salad from "../../assets/Images/salad.svg";
import { useHistory } from "react-router";
import { fadeAnimation } from "../../styles/animations";

const EmptyPage = () => {
  const history = useHistory();

  return (
    <Box w="100vw" mt="6" animation={fadeAnimation} marginBottom="50px">
      <Flex flexDirection="column" alignItems="center" w="90%" margin="0 auto">
        <Center
          border="1px dashed #D0D0D0"
          padding={["20px 10px", "20px 10px", "20px 40px"]}
          w="90%"
          maxW="1024px"
        >
          <Stack alignItems="center" spacing="6">
            <Heading as="h2" color="gray.400" textAlign="center" fontSize="2xl">
              Você ainda não tem receitas cadastradas.
            </Heading>
            <Text color="gray.400" textAlign="center" fontSize="lg">
              Cadastre uma nova receita clicando no botão abaixo
            </Text>
            <Image
              src={Salad}
              alt="Imagem de Salada"
              w={["150px", "150px", "250px"]}
            />
          </Stack>
        </Center>
        <Button
          bg="orange.200"
          h="54px"
          w="250px"
          color="#ffffff"
          mt="6"
          onClick={() => history.push("/addRecipe")}
        >
          Cadastrar receita
        </Button>
      </Flex>
    </Box>
  );
};

export default EmptyPage;
