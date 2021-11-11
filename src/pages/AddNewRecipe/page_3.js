import AddItens from "../../components/AddItensForm";
import { useAddRecipe } from "../../providers/AddRecipe";
import { useMyRecipes } from "../../providers/MyRecipes";
import { useHistory } from "react-router";

const NewRecipePage03 = () => {
  const { instructions, setInstructions, recipeBody, setRecipeBody } =
    useAddRecipe();

  const { addRecipe } = useMyRecipes();
  const { token } = JSON.parse(localStorage.getItem("@cookin:token"));
  const history = useHistory();

  const addNewRecipe = () => {
    setRecipeBody({ ...recipeBody, instructions: [...instructions] });
    addRecipe(recipeBody, token);
    //adicionar um toast
    //adicionar um time
    history.push("/dashboard");
  };

  return (
    <AddItens
      array={instructions}
      setArray={setInstructions}
      handleClick={addNewRecipe}
      buttonText="Prosseguir"
    />
  );
};

export default NewRecipePage03;
