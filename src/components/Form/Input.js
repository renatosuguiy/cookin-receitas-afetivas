import {
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
  FormLabel
} from "@chakra-ui/react";
import { forwardRef, useState, useCallback, useEffect } from "react";

const InputColors = {
  default: "gray.100",
  filled: "green.500",
  error: "red.500",
  focus: "purple.400",
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

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setColor("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error} display='flex' justifyContent='center'>
      {!!label && <FormLabel color="gray.400">{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        onChangeCapture={(e) => setValue(e.currentTarget.value)}
        onBlurCapture={handleInputBlur}
        onFocus={handleInputFocus}
        borderColor={InputColors[color]}
        color={InputColors[color]}
        bg="white"
        variant="outline"
        _hover={{ bgColor: "gray.100" }}
        _placeholder={{ color: "gray.300" }}
        _focus={{
          bg: "gray.100",
        }}
        size="lg"
        h="38px"
        w='80%'
        ref={ref}
        {...rest}
        display='flex'
      />

      {!!error && (
        <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
