import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { RecipesProvider } from "./recipes";
import { AuthProvider } from "./Auth";

export const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <RecipesProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </RecipesProvider>
    </AuthProvider>
  );
};
