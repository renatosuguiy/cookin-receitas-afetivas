import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { InputSearch } from "./searchInput";

export const SearchBox = ({ functionToSearch }) => {
  const localToken = localStorage.getItem("@cookin:accessToken") || "";
  const user = localStorage.getItem("@cookin:user") || "";
  const userLoggedId = JSON.parse(user).id;

  const handleSearch = (wordSearched) => {
    const { title } = wordSearched;

    functionToSearch(title, localToken, userLoggedId);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <Flex
        mt="6"
        w="100%"
        paddingX={["4", "8"]}
        paddingY="2"
        paddingBottom="6"
        justifyContent="center"
      >
        <Flex
          as="form"
          onSubmit={handleSubmit(handleSearch)}
          justifyContent="center"
        >
          <InputSearch
            placeholder="Procurar receita"
            w={["300px", "300px", "350px"]}
            h="45px"
            {...register("title")}
          />
        </Flex>
      </Flex>
    </>
  );
};
