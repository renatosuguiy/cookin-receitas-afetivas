import AddItens from "../../components/AddItensForm";
import { useAddRecipe } from "../../providers/AddRecipe";
import { useMyRecipes } from "../../providers/MyRecipes";
import { useHistory } from "react-router";
import { useDisclosure } from "@chakra-ui/react";
import { ModalConfirmRecipe } from "../../components/Modal/ModalConfirmRecipe";
import { useToast } from "@chakra-ui/toast";

const NewRecipePage03 = () => {
  const { instructions, setInstructions, recipeBody, cleanStorage } =
    useAddRecipe();
  const { addRecipe } = useMyRecipes();
  const accessToken = localStorage.getItem("@cookin:accessToken") || "";
  const history = useHistory();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addNewRecipe = () => {
    if (instructions.length) {
      addRecipe(recipeBody, accessToken);
      history.push("/myrecipes");
      cleanStorage();
    } else {
      toast({
        title: "Algo deu errado!",
        description: "Não há instruções adicionadas!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const handleBack = () => {
    history.push("/addRecipe2");
  };

  return (
    <>
      <ModalConfirmRecipe
        isOpen={isOpen}
        onClose={onClose}
        onClick={addNewRecipe}
      />
      <AddItens
        title="Adicione o modo de preparo"
        subtitle="Instruções adicionadas"
        array={instructions}
        setArray={setInstructions}
        handleClick={onOpen}
        handleBack={handleBack}
        buttonText="Concluir"
        placeholder="Instrução"
      />
    </>
  );
};

export default NewRecipePage03;
