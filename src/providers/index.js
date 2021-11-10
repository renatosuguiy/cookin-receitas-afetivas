import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";


export const AppProvider = ({ children }) => (
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
);