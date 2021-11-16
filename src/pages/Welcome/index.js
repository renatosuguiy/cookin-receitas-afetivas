import { Image, Button, Grid, Flex, Spacer, Container } from "@chakra-ui/react";
import Logo from "../../assets/Images/CookinLogo.png";
import MealImage from "../../assets/Images/EasterMeal.png";
import { useMediaQuery } from "@mui/material";
import { useHistory } from "react-router";
import Footer from "../../components/Footer/index";

const Welcome = () => {
  const desktopVersion = useMediaQuery("(min-width: 768px)");
  const history = useHistory();

  const handleButton = (path) => {
    history.push(path);
  };

  return (
    <>
      <Container m="0px" p="0px">
        {desktopVersion ? (
          <Grid bgColor="orange.50" w="100vw" h="100vh">
            <Image alt="logo" src={Logo} w="250px" m="25px auto 0px" />

            <Image
              alt="logo"
              src={MealImage}
              w="450px"
              m="0px auto"
              position="relative"
              top="-30px"
            />

            <Flex justifyContent="center" position="relative" top="-20px">
              <Spacer />
              <Button
                color="white"
                colorScheme="orange"
                w="160px"
                mr="20px"
                onClick={() => handleButton("/signup")}
              >
                Registre-se
              </Button>

              <Button
                bg="white"
                color="orange.700"
                m="0px auto"
                w="160px"
                _hover={{ color: "white", bgColor: "orange.500" }}
                onClick={() => handleButton("/login")}
              >
                Entrar
              </Button>

              <Spacer />
            </Flex>
          </Grid>
        ) : (
          <Grid bgColor="orange.50" w="100vw" h="100vh">
            <Image
              alt="logo"
              src={Logo}
              w="250px"
              m="25px auto 0px"
              position="relative"
              top="50px"
            />
            <Flex flexDirection="column">
              <Button
                color="white"
                colorScheme="orange"
                w="45%"
                maxWidth="250px"
                m="0px auto"
                onClick={() => handleButton("/signup")}
              >
                Registre-se
              </Button>
              <Button
                bg="white"
                color="orange.700"
                m="20px auto"
                w="45%"
                maxWidth="250px"
                _hover={{ color: "white", bgColor: "orange.500" }}
                onClick={() => handleButton("/login")}
              >
                Entrar
              </Button>
            </Flex>
          </Grid>
        )}
        <Footer />
      </Container>
    </>
  );
};

export default Welcome;
