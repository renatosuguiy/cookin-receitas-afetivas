import AddItens from "../../components/AddItensForm";
import { useAddRecipe } from "../../providers/AddRecipe";
import { useMyRecipes } from "../../providers/MyRecipes";
import { useHistory } from "react-router";

const NewRecipePage03 = () => {
  const {
    instructions,
    setInstructions,
    recipeBody,
    // setRecipeBody,
    cleanStorage,
  } = useAddRecipe();
  const { addRecipe } = useMyRecipes();
  const accessToken = localStorage.getItem("@cookin:accessToken") || "";

  const history = useHistory();

  const addNewRecipe = () => {
    addRecipe(recipeBody, accessToken);
    history.push("/myrecipes");
    console.log(recipeBody);

    cleanStorage();
  };

  const handleBack = () => {
    history.push("/addRecipe2");
  };

  return (
    <>
      <AddItens
        title="Adicione o modo de preparo"
        subtitle="Instruções adicionadas"
        array={instructions}
        setArray={setInstructions}
        handleClick={addNewRecipe}
        handleBack={handleBack}
        buttonText="Concluir"
        placeholder="Instrução"
      />
    </>
  );
};

export default NewRecipePage03;
