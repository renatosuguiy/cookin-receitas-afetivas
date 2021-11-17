import AddItens from "../../components/AddItensForm";
import { useAddRecipe } from "../../providers/AddRecipe";
import { useHistory } from "react-router";

const NewRecipePage02 = () => {
  const history = useHistory();
  const { ingredients, setIngredients } = useAddRecipe();

  const handleClick = () => {
    history.push("/addRecipe3");
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
