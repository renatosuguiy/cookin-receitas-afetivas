import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputGroup,
} from "@chakra-ui/react";
import { forwardRef, useState, useCallback, useEffect } from "react";

import { InputRightElement } from "@chakra-ui/input";
import { Center } from "@chakra-ui/layout";
import { theme } from "../../styles/theme";
import { FaSearch } from "react-icons/fa";

import { Icon } from "@chakra-ui/icon";

const InputColors = {
  default: "gray.100",
  filled: "green.500",
  error: "red.500",
  focus: "gray.400",
};

const InputBase = ({ name, label, error = null, ...rest }, ref) => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("default");

  useEffect(() => {
    if (error) {
      return setColor("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setColor("focus");
    }
  }, [error]);

  return (
    <FormControl isInvalid={!!error} display="flex" justifyContent="center">
      {!!label && <FormLabel color="gray.400">{label}</FormLabel>}
      <InputGroup justifyContent="center">
        <ChakraInput
          id={name}
          name={name}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onFocus={handleInputFocus}
          borderColor={InputColors[color]}
          color="#8894a2"
          bg="white"
          variant="outline"
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.400" }}
          _focus={{
            bg: "gray.100",
          }}
          size="lg"
          h="38px"
          w="80%"
          ref={ref}
          {...rest}
          display="flex"
          boxShadow="base"
        />

        {/* {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>} */}
        <InputRightElement top='2.5px'>
          <Center
            borderRadius="100%"
            as="button"
            ml="1"
            mr="4"
            w="40px"
            h="40px"
            fontSize="2xl"
          >
            <Icon
              fill="gray.400"
              _hover={{ fill: theme.colors.orange[200] }}
              w="20px"
              h="20px"
              as={FaSearch}
            />
          </Center>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export const InputSearch = forwardRef(InputBase);
