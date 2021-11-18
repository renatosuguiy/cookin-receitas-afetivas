import {
  Heading,
  Button,
  Grid,
  Text,
  VStack,
  Link,
  Select,
  Image,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { rightAnimation } from "../../styles/animations";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import LoginGoogle from "../GoogleLogin";

const SignUpForm = ({ handleSignUp, errors, register, loading }) => {
  return (
    <Grid
      onSubmit={handleSignUp}
      as="form"
      id="signup_Form"
      mt="5 "
      h="550px"
      maxWidth="600px"
      padding={["5px 15px", "15px 20px", "15px 20px"]}
      width={["100%", "100%", "100%", "68%"]}
      mr={["0px", "15px", "0%", "15%"]}
      border="2px solid"
      borderColor="gray.100"
      bg="white"
      borderRadius="10px"
      animation={rightAnimation}
      minWidth={["0", "0", "330px", "330px"]}
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
      <VStack spacing="3">
        <Input
          placeholder="Nome"
          {...register("name")}
          type="text"
          error={errors.name}
          color="black"
          icon={FaUser}
        />
        <Input
          placeholder="Email"
          {...register("email")}
          type="email"
          error={errors.email}
          color="black"
          icon={FaEnvelope}
        />
        <Input
          placeholder="Senha"
          {...register("password")}
          type="password"
          error={errors.password}
          color="black"
          icon={FaLock}
        />
        <Input
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
          type="password"
          error={errors.confirmPassword}
          color="black"
          icon={FaLock}
        />
        <Select
          w="100%"
          color="black"
          error={errors.gender}
          {...register("gender")}
          placeholder="Escolha seu gênero"
        >
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Outro">Outro</option>
        </Select>
      </VStack>
      <VStack spacing="3">
        <Button
          mt="10px"
          form="signup_Form"
          type="submit"
          isLoading={loading}
          w="65%"
          padding="20px"
          h="35px"
          bg="orange.200"
          _hover={{ bgColor: "orange.100" }}
        >
          Cadastrar
        </Button>
        <Text color="orange.400">Cadastrar com a conta do Google</Text>
        <LoginGoogle />
        <Text textAlign="center" mt="20px" color="orange.400">
          Já tem uma conta? <br />
          Entre{" "}
          <Link href="/login" fontWeight="bold" color="pink.400">
            clicando aqui
          </Link>
        </Text>
      </VStack>
    </Grid>
  );
};

export default SignUpForm;
