import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth";
import { MyRecipesProvider } from "./MyRecipes";
import { RecipesProvider } from "./recipes";
import { AddRecipeProvider } from "./AddRecipe";

export const AppProvider = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <RecipesProvider>
        <AuthProvider>
          <MyRecipesProvider>
            <AddRecipeProvider>{children}</AddRecipeProvider>
          </MyRecipesProvider>
        </AuthProvider>
      </RecipesProvider>
    </ChakraProvider>
  );
};
