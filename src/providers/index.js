import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { RecipesProvider } from "./recipes";
import { AddRecipeProvider } from "./AddRecipe";

export const AppProvider = ({ children }) => {
  return (
    <RecipesProvider>
      <AddRecipeProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </AddRecipeProvider>
    </RecipesProvider>
  );
};
