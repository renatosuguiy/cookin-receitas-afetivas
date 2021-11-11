import { Image, Flex, Grid, VStack, Heading, Button, Text, Link} from "@chakra-ui/react";
import LogoPrimary from "../../assets/Images/logo_primary.png";
import LoginCake from "../../assets/Images/login_cake.png";
import { Input } from "../Form/Input";



const LoginComponent = () => {
  return (
    <Flex
      height="100vh"
      bgGradient="linear(to-r, orange.100 5%, orange.50 110%)"
      alignItems="center"
      padding="12px 20px"
      color="white"
    >
      <Flex w="100%" justifyContent="center" alignItems="center" flexDirection="row">
      <Grid
          as="form"
          mt="5 "
          h='470px'
          padding="15px 10px"
          w="60%"
          ml='100px'
          border="2px solid"
          borderColor="gray.100"
          bg="white"
          borderRadius="10px"
        >
          <Heading box-shadow="0px 4px 4px 0px #00000040"
 textAlign="center" fontSize="3xl" color="orange.400">Login</Heading>
          <VStack spacing="4">
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button w='55%' padding='20px' h='50px' bg='orange.200'>Entrar</Button>
            <Text color='orange.400'>ou</Text>
            <Text color='orange.400'>Entrar com a conta do Google</Text>
            <Text color='black'>GOOGLE</Text>
            
          </VStack> 
          <Text textAlign='center' mt='20px' color='orange.400'>Não tem uma conta? <br/>Crie uma <Link href='/signup' fontWeight="bold" color='pink.400'>clicando aqui</Link></Text>
        </Grid>
        <Grid  w="100%" ml='300px' >
          <Image boxSize="300px" src={LogoPrimary} alt="logo" />
          <Image w='55%' h='75%' src={LoginCake} alt="logo" />
        </Grid>
      </Flex>
    </Flex>
  );
};

export default LoginComponent;
