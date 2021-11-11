import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import SignUpImages from "./SignUpImages";
import SignUpForm from "./SignUpForm";
import { Flex } from "@chakra-ui/react";
import {
  Heading,
  Button,
  Grid,
  Input,
  Text,
  VStack,
  Link,
  Select
} from "@chakra-ui/react";

const SignUpComponent = () => {
  const { signUp } = useAuth()

  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("Informe email!").email(),
    name: yup.string().required("Informe seu nome"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres.")
      .required("Informe senha!"),
    confirmPassword: yup
      .string()
      .min(6, "Minimo de 6 caracteres.")
      .required("Confirme sua senha!")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = (data) => {
    console.log(data)
    setLoading(true)
      signUp(data)
      .then((_) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  return (
    <Flex
      height="100vh"
      bgGradient="linear(to-r, orange.50 30%, orange.100 80%)"
      alignItems="center"
      padding="12px 20px"
      color="white"
    >
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <SignUpImages />

       

    <Grid
      onSubmit={handleSubmit(handleSignUp)}
      as="form"
      id="login_Form"
      mt="5 "
      h="550px"
      padding="15px 25px"
      w={["100%", "100%", "60%", "60%"]}
      mr="220px"
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
        <Select color='black' placeholder="Gênero">
          <option value="option1">Feminino</option>
          <option value="option2">Binário</option>
          <option value="option3">Masculino</option>
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
        <Text mb='15px' color="black">GOOGLE</Text>
      </VStack>
      <Text textAlign="center" mt="20px" color="orange.400">
        Já tem uma conta? <br />
        Crie uma{" "}
        <Link href="/login" fontWeight="bold" color="pink.400">
          clicando aqui
        </Link>
      </Text>
    </Grid>
    </Flex>
    </Flex>
  );
};


        {/* <SignUpForm
          errors={errors}
          handleSignUp={handleSubmit(handleSignUp)}
          loading={loading}
          register={register}
        /> */}




export default SignUpComponent;
