import { Flex, Image } from "@chakra-ui/react";
import LogoPrimary from "../../assets/Images/logo_primary.png";
import LoginCake from "../../assets/Images/login_cake.png";

const LoginImages = () => {
  return (
    <Flex ml="10%" flexDirection="column" w="100%">
      <Image
        minWidth={["10px", "15px", "240px", "250px"]}
        maxWidth="55%"
        h="80%" src={LogoPrimary} alt="logo" />
      <Image
        minWidth={["10px", "15px", "220px", "220px"]}
        maxWidth="50%"
        h="80%"
        src={LoginCake}
        alt="logo"
      />
    </Flex>
  );
};

export default LoginImages;
