import {
  Heading,
  Box,
  Text,
  Flex,
  Container,
  Link,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";
import { useMediaQuery } from "@mui/material";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  const desktopVersion = useMediaQuery("(min-width: 850px)");

  return (
    <>
      {desktopVersion ? (
        <Box w="100vw" textAlign="center" bgColor="orange.50">
          <Heading fontSize="xl" color="orange.700" fontWeight="bold" mb="10px">
            Nossa equipe
          </Heading>
          <Flex justifyContent="center">
            <Box
              m="10px 0px 10px 15px"
              borderRight="1px solid #000000"
              pr="15px"
            >
              <Flex>
                <Link
                  href="https://www.linkedin.com/in/emilypregolao/"
                  isExternal
                  m="2px 5px 0px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsLinkedin />
                </Link>
                <Link
                  href="https://github.com/emilyregolao"
                  isExternal
                  m="2px 5px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsGithub />
                </Link>
                <Text m="0px 5px">Emily Regolão</Text>
              </Flex>
            </Box>

            <Box
              m="10px 0px 10px 15px"
              borderRight="1px solid #000000"
              pr="15px"
            >
              <Flex>
                <Link
                  href="https://www.linkedin.com/in/oliveir5/"
                  isExternal
                  m="2px 5px 0px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsLinkedin />
                </Link>
                <Link
                  href="https://github.com/larissakoliveira"
                  isExternal
                  m="2px 5px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsGithub />
                </Link>
                <Text m="0px 5px">Larissa Oliveira</Text>
              </Flex>
            </Box>

            <Box
              m="10px 0px 10px 15px"
              borderRight="1px solid #000000"
              pr="15px"
            >
              <Flex>
                <Link
                  href="https://www.linkedin.com/in/manoela-cunha/"
                  isExternal
                  m="2px 5px 0px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsLinkedin />
                </Link>
                <Link
                  href="https://github.com/ManoelaCunha"
                  isExternal
                  m="2px 5px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsGithub />
                </Link>
                <Text m="0px 5px">Manoela Cunha</Text>
              </Flex>
            </Box>

            <Box
              m="10px 0px 10px 15px"
              borderRight="1px solid #000000"
              pr="15px"
            >
              <Flex>
                <Link
                  href="http://www.linkedin.com/in/raissalstoledo"
                  isExternal
                  m="2px 5px 0px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsLinkedin />
                </Link>
                <Link
                  href="https://github.com/raissalst"
                  isExternal
                  m="2px 5px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsGithub />
                </Link>
                <Text m="0px 5px">Raissa Toledo</Text>
              </Flex>
            </Box>

            <Box m="10px 0px 10px 15px">
              <Flex>
                <Link
                  href="https://www.linkedin.com/in/renatosuguiy/"
                  isExternal
                  m="2px 5px 0px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsLinkedin />
                </Link>
                <Link
                  href="https://github.com/renatosuguiy"
                  isExternal
                  m="2px 5px"
                  fontSize="lg"
                  _hover={{ textDecoration: "none", color: "orange.900" }}
                >
                  <BsGithub />
                </Link>
                <Text m="0px 5px">Renato Suguiy</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        <>
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            bgColor="orange.50"
          >
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
                  <Box>
                    <Flex>
                      <Link
                        href="https://www.linkedin.com/in/emilypregolao/"
                        isExternal
                        m="2px 5px 0px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsLinkedin />
                      </Link>
                      <Link
                        href="https://github.com/emilyregolao"
                        isExternal
                        m="2px 5px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsGithub />
                      </Link>
                      <Text m="0px 5px">Emily Regolão</Text>
                    </Flex>
                  </Box>
                </AccordionPanel>

                <AccordionPanel pb={4}>
                  <Box>
                    <Flex>
                      <Link
                        href="https://www.linkedin.com/in/oliveir5/"
                        isExternal
                        m="2px 5px 0px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsLinkedin />
                      </Link>
                      <Link
                        href="https://github.com/larissakoliveira"
                        isExternal
                        m="2px 5px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsGithub />
                      </Link>
                      <Text m="0px 5px">Larissa Oliveira</Text>
                    </Flex>
                  </Box>
                </AccordionPanel>

                <AccordionPanel pb={4}>
                  <Box>
                    <Flex>
                      <Link
                        href="https://www.linkedin.com/in/manoela-cunha/"
                        isExternal
                        m="2px 5px 0px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsLinkedin />
                      </Link>
                      <Link
                        href="https://github.com/ManoelaCunha"
                        isExternal
                        m="2px 5px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsGithub />
                      </Link>
                      <Text m="0px 5px">Manoela Cunha</Text>
                    </Flex>
                  </Box>
                </AccordionPanel>

                <AccordionPanel pb={4}>
                  <Box>
                    <Flex>
                      <Link
                        href="http://www.linkedin.com/in/raissalstoledo"
                        isExternal
                        m="2px 5px 0px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsLinkedin />
                      </Link>
                      <Link
                        href="https://github.com/raissalst"
                        isExternal
                        m="2px 5px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsGithub />
                      </Link>
                      <Text m="0px 5px">Raissa Toledo</Text>
                    </Flex>
                  </Box>
                </AccordionPanel>

                <AccordionPanel pb={4}>
                  <Box>
                    <Flex>
                      <Link
                        href="https://www.linkedin.com/in/renatosuguiy/"
                        isExternal
                        m="2px 5px 0px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsLinkedin />
                      </Link>
                      <Link
                        href="https://github.com/renatosuguiy"
                        isExternal
                        m="2px 5px"
                        fontSize="lg"
                        _hover={{ textDecoration: "none", color: "orange.900" }}
                      >
                        <BsGithub />
                      </Link>
                      <Text m="0px 5px">Renato Suguiy</Text>
                    </Flex>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </>
      )}
    </>
  );
};

export default Footer;
