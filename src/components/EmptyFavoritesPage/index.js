import {
  Flex,
  Heading,
  Text,
  Box,
  Image,
  Center,
  Stack,
} from "@chakra-ui/react";
import Salad from "../../assets/Images/salad.svg";

const EmptyFavoritesPage = () => {
  return (
    <Box w="100vw" mt="6">
      <Flex flexDirection="column" alignItems="center" w="90%" margin="0 auto">
        <Center
          border="1px dashed #D0D0D0"
          padding={["20px 10px", "20px 10px", "20px 40px"]}
          w="90%"
          maxW="1024px"
        >
          <Stack alignItems="center" spacing="6">
            <Heading as="h2" color="gray.400" textAlign="center" fontSize="2xl">
              Você ainda não tem receitas favoritas.
            </Heading>
            <Text color="gray.400" textAlign="center" fontSize="lg">
              Adicione uma receita clicando no coração.
            </Text>
            <Image
              src={Salad}
              alt="Imagem de Salada"
              w={["150px", "150px", "250px"]}
            />
          </Stack>
        </Center>
      </Flex>
    </Box>
  );
};

export default EmptyFavoritesPage;
