import {
    Heading,
    Button,
    Grid,
    Text,
    VStack,
    Link,
    Select,
<<<<<<< HEAD
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input"
import { rightAnimation } from "../../styles/animations";
=======
    Image,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import LogoGoogle from "../../assets/Images/logogoogle.png";
>>>>>>> developer

const SignUpForm = ({ handleSignUp, errors, register, loading }) => {
    return (
        <Grid
            onSubmit={handleSignUp}
            as="form"
            id="login_Form"
            mt="5 "
            h="550px"
<<<<<<< HEAD
            padding="15px 25px"
            w={["100%", "100%", "60%", "60%"]}
            mr="220px"
=======
            padding={["5px 15px", "10px 30px", "15px 25px"]}
            width={["100%", "100%", "60%", "60%"]}
            mr={["0px", "15px", "200px", "200px"]}
>>>>>>> developer
            border="2px solid"
            borderColor="gray.100"
            bg="white"
            borderRadius="10px"
<<<<<<< HEAD
            animation={rightAnimation}
=======
            minWidth={["0", "0", "330px", "330px"]}
>>>>>>> developer
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
<<<<<<< HEAD
            <VStack spacing="4">
=======
            <VStack spacing="3">
>>>>>>> developer
                <Input
                    placeholder="Nome"
                    {...register("name")}
                    type="text"
                    error={errors.name}
                    color="black"
<<<<<<< HEAD
=======
                    icon={FaUser}

>>>>>>> developer
                />
                <Input
                    placeholder="Email"
                    {...register("email")}
                    type="email"
                    error={errors.email}
                    color="black"
<<<<<<< HEAD
=======
                    icon={FaEnvelope}
>>>>>>> developer
                />
                <Input
                    placeholder="Senha"
                    {...register("password")}
                    type="password"
                    error={errors.password}
                    color="black"
<<<<<<< HEAD
=======
                    icon={FaLock}
>>>>>>> developer
                />
                <Input
                    placeholder="Confirmar senha"
                    {...register("confirmPassword")}
                    type="password"
                    error={errors.confirmPassword}
                    color="black"
<<<<<<< HEAD
                />
                <Select
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
=======
                    icon={FaLock}
                />
                <Select
                    w='100%'
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
>>>>>>> developer
                    form="login_Form"
                    type="submit"
                    isLoading={loading}
                    w="65%"
                    padding="20px"
<<<<<<< HEAD
                    h="40px"
=======
                    h="35px"
>>>>>>> developer
                    bg="orange.200"
                    _hover={{ bgColor: "orange.100" }}
                >
                    Cadastrar
                </Button>
                <Text color="orange.400">Cadastrar com a conta do Google</Text>
<<<<<<< HEAD
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
=======
                <Image src={LogoGoogle} cursor="pointer" w="50px" h="35px" />
                <Text textAlign="center" mt="20px" color="orange.400">
                    Já tem uma conta? <br />
                    Crie uma {" "}
                    <Link href="/login" fontWeight="bold" color="pink.400">
                        clicando aqui
                    </Link>
                </Text>
            </VStack>
>>>>>>> developer
        </Grid>
    );
};

<<<<<<< HEAD
export default SignUpForm;
=======
export default SignUpForm;
>>>>>>> developer
