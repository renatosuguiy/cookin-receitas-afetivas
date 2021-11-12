import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth";
import { MyRecipesProvider } from "./MyRecipes";
import { RecipesProvider } from "./recipes";

export const AppProvider = ({ children }) => {
  return (
    <RecipesProvider>
      <MyRecipesProvider>
        <AuthProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </AuthProvider>
      </MyRecipesProvider>
    </RecipesProvider>
  );
};
