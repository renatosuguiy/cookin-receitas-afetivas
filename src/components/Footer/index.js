import {
  Heading,
  Box,
  Text,
  Flex,
  Image,
  Link,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";
import Avatar from "../../assets/Images/avatar.png";
import { useMediaQuery } from "@mui/material";
const Footer = () => {
  const desktopVersion = useMediaQuery("(min-width: 768px)");

  return (
    <Box bgColor="orange.50" w="100%" textAlign="center" p="10px 0px">
      {desktopVersion ? (
        <>
          <Heading fontSize="xl" color="orange.700" fontWeight="bold">
            Nossa equipe
          </Heading>
          <Flex justifyContent="center">
            <Flex>
              <Text
                m="10px 0px 10px 15px"
                borderRight="1px solid #000000"
                pr="15px"
              >
                <Link
                  href="https://www.linkedin.com/in/emilypregolao/"
                  isExternal
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  Emily Regolão
                </Link>
              </Text>
            </Flex>
            <Flex>
              <Text
                m="10px 0px 10px 15px"
                borderRight="1px solid #000000"
                pr="15px"
              >
                <Link
                  href="#"
                  isExternal
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  Larissa Oliveira
                </Link>
              </Text>
            </Flex>
            <Flex>
              <Text
                m="10px 0px 10px 15px"
                borderRight="1px solid #000000"
                pr="15px"
              >
                <Link
                  href="#"
                  isExternal
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  Manoela Cunha
                </Link>
              </Text>
            </Flex>
            <Flex>
              <Text
                m="10px 0px 10px 15px"
                borderRight="1px solid #000000"
                pr="15px"
              >
                <Link
                  href="#"
                  isExternal
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  Raissa Toledo
                </Link>
              </Text>
            </Flex>
            <Flex>
              <Text m="10px 0px 10px 15px">
                <Link
                  href="#"
                  isExternal
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  Renato Suguiy
                </Link>
              </Text>
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontSize="xl" color="orange.700" fontWeight="bold">
                    Nossa equipe
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <Text>
                  <Link
                    href="https://www.linkedin.com/in/emilypregolao/"
                    isExternal
                    _hover={{ textDecoration: "none", color: "orange.900" }}
                  >
                    Emily Regolão
                  </Link>
                </Text>
              </AccordionPanel>

              <AccordionPanel pb={4}>
                <Text>
                  <Link
                    href="#"
                    isExternal
                    _hover={{ textDecoration: "none", color: "orange.900" }}
                  >
                    Larissa Oliveira
                  </Link>
                </Text>
              </AccordionPanel>

              <AccordionPanel pb={4}>
                <Text>
                  <Link
                    href="#"
                    isExternal
                    _hover={{ textDecoration: "none", color: "orange.900" }}
                  >
                    Manoela Cunha
                  </Link>
                </Text>
              </AccordionPanel>

              <AccordionPanel pb={4}>
                <Text>
                  <Link
                    href="#"
                    isExternal
                    _hover={{ textDecoration: "none", color: "orange.900" }}
                  >
                    Raissa Toledo
                  </Link>
                </Text>
              </AccordionPanel>

              <AccordionPanel pb={4}>
                <Text>
                  <Link
                    href="#"
                    isExternal
                    _hover={{ textDecoration: "none", color: "orange.900" }}
                  >
                    Renato Suguiy
                  </Link>
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      )}
    </Box>
  );
};

export default Footer;
