import { FaSignOutAlt } from "react-icons/fa";
import UserImage from "../../assets/Images/avatar.png";
import { Center, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import { theme } from "../../styles/theme";
import { useAuth } from "../../providers/Auth";
import { ModalLogout } from "../Modal/ModalLogout";
import { useDisclosure } from "@chakra-ui/react";
import boy from "../../assets/Images/boy1.png";
import girl from "../../assets/Images/girl4.png";
import panda from "../../assets/Images/panda1.png";

export const HeaderWelcome = () => {
  const user = localStorage.getItem("@cookin:user") || "";
  const username = JSON.parse(user).name;
  const gender = JSON.parse(user).gender;

  const { logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let arrayAvatar = [boy, girl, panda];
  let positionInArray = 0;
  let messageWelcome = "Bem vindo, ";

  if (gender === "Feminino") {
    positionInArray = 1;
    messageWelcome = "Bem vinda, ";
  } else if (gender === "Outro") {
    positionInArray = 2;
    messageWelcome = "Bem vindx, ";
  }

  return (
    <>
      <ModalLogout isOpen={isOpen} onClose={onClose} onClick={logout} />
      <Flex
        bgColor="white"
        paddingX={["20px", "25px", "100px", "170px"]}
        mt="0px"
        height={["47px", "47px", "65px", "65px"]}
      >
        <Flex align="center">
          <Image w="35px" h="35px" src={arrayAvatar[positionInArray]}></Image>
          <Heading
            ml="10px"
            fontSize={["18px", "18px", "24px", "24px"]}
            fontFamily={theme.fonts.body}
            color={theme.colors.orange[400]}
          >
            {messageWelcome}
            {username}!
          </Heading>
        </Flex>
        <Center
          ml="auto"
          as="button"
          border="none"
          bg="none"
          onClick={onOpen}
          fontSize="2rem"
          _hover={{ cursor: "pointer" }}
        >
          <FaSignOutAlt color={theme.colors.orange[50]} />
        </Center>
      </Flex>
    </>
  );
};
