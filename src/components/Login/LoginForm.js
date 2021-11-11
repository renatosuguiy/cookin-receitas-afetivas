import { Heading, Button, Grid, Text, VStack, Link } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";

const LoginForm = ({ handleLogin, errors, register, loading }) => {
  return (
    <Grid
      onSubmit={handleLogin}
      as="form"
      id="login_Form"
      mt="5 "
      h="470px"
      padding="15px 25px"
      w={["100%", "100%", "60%", "60%"]}
      ml="200px"
      border="2px solid"
      borderColor="gray.100"
      bg="white"
      borderRadius="10px"
    >
      <Heading
        box-shadow="0px 4px 4px 0px #00000040"
        textAlign="center"
        fontSize="3xl"
        mt="10px"
        color="orange.400"
      >
        Login
      </Heading>
      <VStack spacing="4">
        <Input
          placeholder="Email"
          {...register("email")}
          type="email"
          error={errors.email}
          color="black"
        />
        <Input
          placeholder="Senha"
          {...register("password")}
          type="password"
          error={errors.password}
          color="black"
        />
        <Button
          form="login_Form"
          type="submit"
          isLoading={loading}
          w="65%"
          padding="20px"
          h="40px"
          bg="orange.200"
          _hover={{ bgColor: "orange.100" }}
        >
          Entrar
        </Button>
        <Text color="orange.400">ou</Text>
        <Text color="orange.400">Entrar com a conta do Google</Text>
        <Text color="black">GOOGLE</Text>
      </VStack>
      <Text textAlign="center" mt="20px" color="orange.400">
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
