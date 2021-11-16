import { Heading, Button, Grid, Text, VStack, Link, Image } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
<<<<<<< HEAD
import { leftAnimation } from "../../styles/animations";
=======
import { FaEnvelope, FaLock } from "react-icons/fa";
import LogoGoogle from "../../assets/Images/logogoogle.png"


>>>>>>> developer

const LoginForm = ({ handleLogin, errors, register, loading }) => {
  return (
    <Grid
      onSubmit={handleLogin}
      as="form"
      id="login_Form"
      mt="5 "
      h="470px"
      maxWidth='600px'
      padding={["5px 15px", "15px 20px","15px 20px",]}
      width={["100%", "100%", "60%", "60%"]}
      ml={["0px", "15px", "200px", "200px"]}
      border="2px solid"
      borderColor="gray.100"
      bg="white"
      borderRadius="10px"
<<<<<<< HEAD
      animation={leftAnimation}
=======
      minWidth={['0','0','330px','330px']}
>>>>>>> developer
    >
      <Heading
        box-shadow="0px 4px 4px 0px #00000040"
        textAlign="center"
        fontSize="3xl"
        mt="10px"
        color="orange.400"
        textShadow= '0px 4px 4px 0px rgba(0, 0, 0, 0.25'
      >
        Login
      </Heading>
      <VStack spacing="3">
        <Input
          placeholder="Email"
          {...register("email")}
          type="email"
          error={errors.email}
          icon={FaEnvelope}
          color="black"
        />
        <Input
          placeholder="Senha"
          {...register("password")}
          type="password"
          error={errors.password}
          color="black"
          icon={FaLock}
        />
        <Button
          form="login_Form"
          maxWidth="300px"
          type="submit"
          isLoading={loading}
          w="65%"
          padding="20px"
          h="40px"
          mt='20px'
          bg="orange.200"
          _hover={{ bgColor: "orange.100" }}
        >
          Entrar
        </Button>
        <Text color="orange.400">ou</Text>
        <Text color="orange.400">Entrar com a conta do Google</Text>
        <Image src={LogoGoogle} cursor='pointer' w='50px' h='35px'/>
      </VStack>
      <Text textAlign="center" mt="30px" color="orange.400">
        Não tem uma conta? <br />
        Crie uma{" "}
        <Link href="/signup" fontWeight="bold" color="pink.400">
          clicando aqui
        </Link>
      </Text>
    </Grid>
  );
};

export default LoginForm;
