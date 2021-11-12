import AddItens from "../../components/AddItensForm";
import { useAddRecipe } from "../../providers/AddRecipe";
import { useHistory } from "react-router";

const NewRecipePage02 = () => {
  const history = useHistory();
  const { ingredients, setIngredients, recipeBody, setRecipeBody } =
    useAddRecipe();

  const handleClick = () => {
    history.push("/addRecipe3");
    localStorage.setItem("@cookin:ingredients", JSON.stringify(ingredients));
    setRecipeBody({ ...recipeBody, ingredients: [...ingredients] });
  };

  const handleBack = () => {
    history.push("/addRecipe");
    localStorage.setItem("@cookin:ingredients", JSON.stringify(ingredients));
    setRecipeBody({ ...recipeBody, ingredients: [...ingredients] });
  };

  return (
    <AddItens
      title="Adicione os ingredientes"
      secondaryTitle="Ingredientes adicionados"
      array={ingredients}
      setArray={setIngredients}
      handleClick={handleClick}
      handleBack={handleBack}
      buttonText="Prosseguir"
    />
  );
};

export default NewRecipePage02;
