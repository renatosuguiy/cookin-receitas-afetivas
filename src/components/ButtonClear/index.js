import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { theme } from "../../styles/theme";

export const ButtonClear = ({ setState }) => {
  //recebe por props o setState de busca a ser zerado
  return (
    <Box justifyContent="center" textAlign="center">
      <Button
        padding="6"
        mt="10"
        bgColor={theme.colors.gray[400]}
        color="white"
        _hover={{ bg: theme.colors.orange[400] }}
        onClick={() => setState([])}
      >
        Limpar Pesquisa
      </Button>
    </Box>
  );
};
