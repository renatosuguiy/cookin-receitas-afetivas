import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth";
import { RecipesProvider } from "./recipes";
import { AddRecipeProvider } from "./AddRecipe";

export const AppProvider = ({ children }) => {
  return (
    <RecipesProvider>
      <AuthProvider>
        <AddRecipeProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </AddRecipeProvider>
      </AuthProvider>
    </RecipesProvider>
  );
};
