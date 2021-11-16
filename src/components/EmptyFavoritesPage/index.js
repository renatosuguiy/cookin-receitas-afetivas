import { Flex, Heading, Text, Box, Center, Stack } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { fadeAnimation } from "../../styles/animations";

const EmptyFavoritesPage = () => {
  return (
    <Box w="100vw" mt="6" animation={fadeAnimation}>
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
            <Box
              padding="25px"
              borderRadius="100%"
              backgroundColor="#ededed"
              boxShadow="0 0 0.4em #ededed"
            >
              <AiFillHeart style={{ color: "#979797", fontSize: "90px" }} />
            </Box>
          </Stack>
        </Center>
      </Flex>
    </Box>
  );
};

export default EmptyFavoritesPage;
