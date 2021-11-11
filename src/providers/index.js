import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { RecipesProvider } from "./recipes";

export const AppProvider = ({ children }) => {
  return (
    <RecipesProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </RecipesProvider>
  );
};
