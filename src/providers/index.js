import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth";
import { RecipesProvider } from "./recipes";

export const AppProvider = ({ children }) => {
  return (
  <RecipesProvider>
    <AuthProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AuthProvider>
  </RecipesProvider>
  );
};
