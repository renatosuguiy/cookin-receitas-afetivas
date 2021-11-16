import { Flex, Image } from "@chakra-ui/react";
import LogoPrimary from "../../assets/Images/logo_primary.png";
import LoginCake from "../../assets/Images/login_cake.png";

const LoginImages = () => {
  return (
    <Flex ml='10%' flexDirection='column' w="100%" >
      <Image boxSize="310px" src={LogoPrimary} alt="logo" />
      <Image minWidth={["10px", "15px", "200px", "200px"]} w="55%" h="90%" src={LoginCake} alt="logo" />
    </Flex>
  );
};

export default LoginImages;
