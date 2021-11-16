import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useAuth } from "../../providers/Auth";
import SignUpImages from "./SignUpImages.js";
import SignUpForm from "./SignUpForm.js";
import { Flex, Fade, SlideFade, ScaleFade, keyframes } from "@chakra-ui/react";


const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

const SignUpComponent = () => {
    const { signUp } = useAuth();
    const spinAnimation = `${spin} 1 2s linear`;
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, [])

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
        console.log(data);
        setLoading(true);
        signUp(data)
            .then((_) => setLoading(false))
            .catch((err) => setLoading(false));
    };

    return (
        <Flex
            height="100vh"
            bgGradient="linear(to-r, orange.50 70%, orange.100 30%)"
            alignItems="center"
            padding="12px 20px"
            color="white"
        >
            <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                animation={spinAnimation}
            >
                <SignUpImages offsetX='30px' initialScale={0.5} />

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