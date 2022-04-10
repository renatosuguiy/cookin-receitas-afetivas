import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useAuth } from "../../providers/Auth";
import SignUpImages from "./SignUpImages.js";
import SignUpForm from "./SignUpForm.js";
import { Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@mui/material";
import { Analytics, AnalyticsBrowser, Context } from '@segment/analytics-next'

const SignUpComponent = () => {

  const [analytics, setAnalytics] = useState(undefined)
  const [writeKey, setWriteKey] = useState('5XOz7TxNzQTBp6TeKNFY9yxUTtBlOYJ3')

  useEffect(() => {
    const loadAnalytics = async () => {
      let [response] = await AnalyticsBrowser.load({ writeKey })
      setAnalytics(response)
    }
    loadAnalytics()
  }, [writeKey])

  const isLagerThan768 = useMediaQuery("(min-width: 768px)");

  const { signUp } = useAuth();

  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("Informe email!").email("E-mail inválido"),
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
    gender: yup.string().required("Informe gênero"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = (data) => {
    setLoading(true);
    signUp(data)
      .then((_) => {
        setLoading(false)
        analytics?.track('SignUp', { email: data.email, name: data.name });
      })
      .catch((err) => setLoading(false));
  };

  return (
    <Flex
      height="100vh"
      bgGradient={[
        "linear(to-l, orange.100 -100%, orange.50 10%)",
        "linear(to-l, orange.100 -110%, orange.50 20%)",
        "linear(to-r, orange.50 70%, orange.100 30%)",
        "linear(to-r, orange.50 70%, orange.100 30%)",
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
        {isLagerThan768 && <SignUpImages />}

        <SignUpForm
          errors={errors}
          handleSignUp={handleSubmit(handleSignUp)}
          loading={loading}
          register={register}
        />
      </Flex>
    </Flex>
  );
};

export default SignUpComponent;
