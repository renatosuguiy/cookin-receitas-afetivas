import { Image, Button, Grid, Flex } from "@chakra-ui/react";
import Logo from "../../assets/Images/CookinLogo.png";

const Welcome = () => {
  return (
    <Grid bgColor="orange.50" w="100vw" h="100vh">
      <Image alt="logo" src={Logo} width="250px" margin="25px auto 0px" />
      <Button color="white" colorScheme="orange" w="160px" m="-70px auto">
        Registre-se
      </Button>
      <Button colorScheme="orange" color="white" m="-120px auto" w="160px">
        Entrar
      </Button>
    </Grid>
  );
};

export default Welcome;
