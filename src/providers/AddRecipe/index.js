import { createContext, useContext, useState } from "react";

const AddRecipeContext = createContext();

export const AddRecipeProvider = ({ children }) => {
  const [recipeBody, setRecipeBody] = useState({});
  const [ingredients, setIngredients] = useState(
    localStorage.getItem("@cookin:ingredients") || []
  );
  const [instructions, setInstructions] = useState(
    localStorage.getItem("@cookin:instructions") || []
  );
  const [item, setItem] = useState("");

  const addToArray = (array, setArray, item) => {
    if (!array.includes(item)) {
      setArray([...array, item]);
    } else {
      alert("você já adicionou esse item!");
    }
  };

  const removeFromArray = (array, setArray, item) => {
    const filteredArray = array.filter((instruc) => instruc !== item);
    if (array === ingredients) {
      localStorage.setItem(
        "@cookin:ingredients",
        JSON.stringify(filteredArray)
      );
    } else {
      localStorage.setItem(
        "@cookin:instructions",
        JSON.stringify(filteredArray)
      );
    }
    setArray(filteredArray);
  };

  return (
    <AddRecipeContext.Provider
      value={{
        recipeBody,
        setRecipeBody,
        addToArray,
        removeFromArray,
        ingredients,
        setIngredients,
        instructions,
        setInstructions,
        item,
        setItem,
      }}
    >
      {children}
    </AddRecipeContext.Provider>
  );
};

export const useAddRecipe = () => {
  return useContext(AddRecipeContext);
};
