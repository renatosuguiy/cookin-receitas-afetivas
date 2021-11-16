import { Grid, Image } from "@chakra-ui/react";
import LogoPrimary from "../../assets/Images/logo_primary.png";
import LoginCake from "../../assets/Images/login_cake.png";
import { rightAnimation } from "../../styles/animations";

const LoginImages = () => {
  return (
    <Grid w="100%" ml="250px" animation={rightAnimation}>
      <Image boxSize="310px" src={LogoPrimary} alt="logo" />
      <Image minWidth={["10px", "15px", "200px", "200px"]} w="55%" h="90%" src={LoginCake} alt="logo" />
    </Grid>
  );
};

export default LoginImages;
