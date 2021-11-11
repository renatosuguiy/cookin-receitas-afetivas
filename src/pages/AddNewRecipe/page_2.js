import AddItens from "../../components/AddItensForm";
import { useAddRecipe } from "../../providers/AddRecipe";
import { useHistory } from "react-router";

const NewRecipePage02 = () => {
  const { ingredients, setIngredients, recipeBody, setRecipeBody } =
    useAddRecipe();
  const history = useHistory();

  const handleClick = () => {
    history.push("/addRecipe3");
    setRecipeBody({ ...recipeBody, ingredients: [...ingredients] });
  };

  return (
    <AddItens
      array={ingredients}
      setArray={setIngredients}
      handleClick={handleClick}
      buttonText="Prosseguir"
    />
  );
};

export default NewRecipePage02;
