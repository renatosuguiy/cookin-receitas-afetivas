import { Image, Flex, Grid, VStack, Heading, Button, Text} from "@chakra-ui/react";
import LogoPrimary from "../../assets/Images/logo_primary.svg";
import LoginCake from "../../assets/Images/login_cake.svg";
import { Input } from "../Form/Input";


const LoginComponent = () => {
  return (
    <Flex
      height="100vh"
      bgGradient="linear(to-r, orange.100 50%, orange.50 50%)"
      alignItems="center"
      padding="12px 20px"
      color="white"
    >
      <Flex w="100%" justifyContent="center" alignItems="center" flexDirection="row">
      <Grid
          as="form"
          mt="5 "
          padding="25px 10px"
          w="40%"
          border="2px solid"
          borderColor="gray.100"
          bg="white"
          borderRadius="10px"
        >
          <Heading box-shadow="0px 4px 4px 0px #00000040"
 textAlign="center" fontSize="3xl" color="orange.400">Login</Heading>
          <VStack spacing="5">
            <Input label="Email" placeholder="Digite seu email" />
            <Input label="Senha" placeholder="Digite sua senha" />
            <Button w='55%' padding='20px' h='50px' bg='orange.200'>Entrar</Button>
            <Text color='orange.400'>ou</Text>
            <Text color='orange.400'>Entrar com a conta do Google</Text>
            <Text>GOOGLE</Text>
          </VStack>
        </Grid>
        <Grid w="100%" paddingRight="100px">
          <Image boxSize="120px" src={LogoPrimary} alt="logo" />
          <Image w='430px' h='230px' src={LoginCake} alt="logo" />
        </Grid>
      </Flex>
    </Flex>
  );
};

export default LoginComponent;
