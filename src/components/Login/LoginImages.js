import { Grid, Image } from "@chakra-ui/react";
import LogoPrimary from "../../assets/Images/logo_primary.png";
import LoginCake from "../../assets/Images/login_cake.png";
import { rightAnimation } from "../../styles/animations";

const LoginImages = () => {
  return (
    <Grid w="100%" ml="250px" animation={rightAnimation}>
      <Image boxSize="300px" src={LogoPrimary} alt="logo" />
      <Image w="55%" h="75%" src={LoginCake} alt="logo" />
    </Grid>
  );
};

export default LoginImages;
