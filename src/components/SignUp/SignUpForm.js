import {
  Heading,
  Button,
  Grid,
  Text,
  VStack,
  Link,
  Select,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";

const SignUpForm = ({ handleSignUp, errors, register, loading }) => {
  return (
    <Grid
      onSubmit={handleSignUp}
      as="form"
      id="login_Form"
      mt="5 "
      h="550px"
      padding={["5px 15px", "10px 20px", "15px 25px"]}
      width={["100%", "100%", "60%", "60%"]}
      mr={["0px", "15px", "200px", "200px"]}
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
        Cadastrar
      </Heading>
      <VStack spacing="4">
        <Input
          placeholder="Nome"
          {...register("name")}
          type="text"
          error={errors.name}
          color="black"
        />
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
        <Input
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
          type="password"
          error={errors.confirmPassword}
          color="black"
        />
        <Select
         w={["90%", "90%","80%",'80%']}
          color="black"
          error={errors.gender}
          {...register("gender")}
          placeholder="Gênero"
        >
          <option value="Feminino">Feminino</option>
          <option value="Binário">Binário</option>
          <option value="Masculino">Masculino</option>
        </Select>
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
          Cadastrar
        </Button>
        <Text color="orange.400">Cadastrar com a conta do Google</Text>
        <Text mb="15px" color="black">
          GOOGLE
        </Text>
      </VStack>
      <Text textAlign="center" mt="20px" color="orange.400">
        Já tem uma conta? <br />
        Crie uma{" "}
        <Link href="/login" fontWeight="bold" color="pink.400">
          clicando aqui
        </Link>
      </Text>
    </Grid>
  );
};

export default SignUpForm;
