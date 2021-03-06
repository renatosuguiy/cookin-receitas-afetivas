import { Image, Center } from "@chakra-ui/react";
import LogoSmall from "../../assets/Images/logo_small.png";
import LogoPrimary from "../../assets/Images/logo_primary_row.png";
import { useMediaQuery } from "@mui/material";

const HeaderLogo = () => {
  const isLagerThan768 = useMediaQuery("(min-width: 768px)");

  return isLagerThan768 ? (
    <Center bg="orange.50" w="100vw" h={["158px", "158px", "125px"]}>
      <Image src={LogoPrimary} w="280px" />
    </Center>
  ) : (
    <Center bg="orange.50" w="100vw" h="60px">
      <Center bg="#FBF0F0" h="50px" w="50px" borderRadius="30px">
        <Image src={LogoSmall} w="35px" />
      </Center>
    </Center>
  );
};

export default HeaderLogo;
