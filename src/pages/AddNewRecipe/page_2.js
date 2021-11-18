import AddItens from "../../components/AddItensForm";
import { useAddRecipe } from "../../providers/AddRecipe";
import { useHistory } from "react-router";
import { useToast } from "@chakra-ui/toast";

const NewRecipePage02 = () => {
  const history = useHistory();
  const toast = useToast();
  const { ingredients, setIngredients } = useAddRecipe();

  const handleClick = () => {
    if (ingredients.length) {
      history.push("/addRecipe3");
    } else {
      toast({
        title: "Algo deu errado!",
        description: "Não há ingredientes adicionados!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const handleBack = () => {
    history.push("/addRecipe");
  };

  return (
    <AddItens
      title="Adicione os ingredientes"
      subtitle="Ingredientes adicionados"
      array={ingredients}
      setArray={setIngredients}
      handleClick={handleClick}
      handleBack={handleBack}
      buttonText="Prosseguir"
      placeholder="Ingrediente"
    />
  );
};

export default NewRecipePage02;
