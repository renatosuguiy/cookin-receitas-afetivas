import { Flex, Image } from "@chakra-ui/react";
import LogoPrimary from "../../assets/Images/logo_primary.png";
import SignUpImage from "../../assets/Images/SignUpImage.png";
import { leftAnimation } from "../../styles/animations";


const SignUpImages = () => {
  return (
    <Flex ml="20%" flexDirection="column" w="100%">
      <Image
        minWidth={["10px", "15px", "270px", "280px"]}
        maxWidth="65%"
        h="80%"
        src={LogoPrimary}
        alt="logo"
      />
      <Image
        minWidth={["10px", "15px", "240px", "240px"]}
        maxWidth="57%"
        h="80%"
        src={SignUpImage}
        alt="logo"
      />
    </Flex>
  );

};

export default SignUpImages;
