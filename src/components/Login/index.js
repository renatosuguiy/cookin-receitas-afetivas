import { Flex } from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import LoginImages from "./LoginImages";
import LoginForm from "./LoginForm";
import { useMediaQuery } from "@mui/material";

const LoginComponent = () => {

  const isLagerThan720 = useMediaQuery('(min-width: 720px)');


  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("Informe email!").email("E-mail inválido"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres.")
      .required("Informe senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    console.log(data + "login");
    setLoading(true);
    login(data)
      .then((_) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  return (
    <Flex
      height="100vh"
      w='100%'
      bgGradient={[
        "linear(to-r, orange.100 -100%, orange.50 10%)",
        "linear(to-r, orange.100 -110%, orange.50 20%)",
        "linear(to-r, orange.100 29%, orange.50 20%)",
        "linear(to-r, orange.100 29%, orange.50 20%)",
      ]}
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
        <LoginForm
          errors={errors}
          handleLogin={handleSubmit(handleLogin)}
          loading={loading}
          register={register}
        />
        {isLagerThan720 && (<LoginImages />)}
      </Flex>
    </Flex>
  );
};

export default LoginComponent;
