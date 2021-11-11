import { FaSignOutAlt } from "react-icons/fa";
import UserImage from "../../assets/Images/avatar.png";
import { Center, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import { theme } from "../../styles/theme";
import { useHistory } from "react-router";

export const HeaderWelcome = () => {
  const history = useHistory();
  //receber o username do local storage ou provider user
  const username = localStorage.getItem("username") || "";

  //puxar do provider depois a função deslogar, essa aqui é temporária
  const handleLogoutNav = () => {
    localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    history.push("/login");
    // notifyLogout() colocar toast!!
  };

  return (
    <Flex
      bgColor="white"
      paddingX={["20px", "25px", "100px", "170px"]}
      mt="0px"
      height={["47px", "47px", "65px", "65px"]}
    >
      <Flex align="center">
        <Image src={UserImage}></Image>
        <Heading
          ml="10px"
          fontSize={["18px", "18px", "24px", "24px"]}
          fontFamily={theme.fonts.body}
          color={theme.colors.orange[400]}
        >
          Bem vindo, {username}!
        </Heading>
      </Flex>
      <Center
        ml="auto"
        as="button"
        border="none"
        bg="none"
        onClick={() => handleLogoutNav()}
        fontSize="2rem"
        _hover={{ cursor: "pointer" }}
      >
        <FaSignOutAlt color={theme.colors.orange[50]} />
      </Center>
    </Flex>
  );
};
