import {
  Heading,
  Button,
  Grid,
  Text,
  VStack,
  Link,
  Image,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { leftAnimation } from "../../styles/animations";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LoginGoogle from "../GoogleLogin";

const LoginForm = ({ handleLogin, errors, register, loading }) => {
  return (
    <Grid
      onSubmit={handleLogin}
      as="form"
      id="login_Form"
      mt="5 "
      h="470px"
      maxWidth="600px"
      padding={["5px 15px", "15px 20px", "15px 20px"]}
      width={["100%", "100%", "100%", "55%"]}
      ml={["0px", "15px", "0%", "15%"]}
      border="2px solid"
      borderColor="gray.100"
      bg="white"
      borderRadius="10px"
      animation={leftAnimation}
      minWidth={["0", "0", "330px", "330px"]}
    >
      <Heading
        box-shadow="0px 4px 4px 0px #00000040"
        textAlign="center"
        fontSize="3xl"
        mt="10px"
        color="orange.400"
        textShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25"
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
          marginTop="0"
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
          mt="20px"
          bg="orange.200"
          _hover={{ bgColor: "orange.100" }}
        >
          Entrar
        </Button>
        <Text color="orange.400">ou</Text>
        <Text color="orange.400">Entrar com a conta do Google</Text>
        <LoginGoogle />
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
