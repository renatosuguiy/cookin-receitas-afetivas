import AddItens from "../../components/AddItensForm";
import { useAddRecipe } from "../../providers/AddRecipe";
import { useMyRecipes } from "../../providers/MyRecipes";
import { useHistory } from "react-router";

const NewRecipePage03 = () => {
  const { instructions, setInstructions, recipeBody, setRecipeBody } =
    useAddRecipe();
  const { addRecipe } = useMyRecipes();
  const accessToken = localStorage.getItem("@cookin:accessToken") || "";

  const history = useHistory();

  const handleBack = () => {
    history.push("/addRecipe2");
    localStorage.setItem("@cookin:instructions", JSON.stringify(instructions));
    setRecipeBody({ ...recipeBody, ingredients: [...instructions] });
  };

  const addNewRecipe = () => {
    localStorage.setItem("@cookin:instructions", JSON.stringify(instructions));
    setRecipeBody({ ...recipeBody, instructions: [...instructions] });
    addRecipe(recipeBody, accessToken);
    console.log(recipeBody);
    console.log(accessToken);
  };

  return (
    <AddItens
      title="Adicione o modo de preparo"
      secondaryTitle="Instruções adicionadas"
      array={instructions}
      setArray={setInstructions}
      handleClick={addNewRecipe}
      handleBack={handleBack}
      buttonText="Concluir"
    />
  );
};

export default NewRecipePage03;
