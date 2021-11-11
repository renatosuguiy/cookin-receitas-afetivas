import { createContext, useContext, useState } from "react";

const AddRecipeContext = createContext();

export const AddRecipeProvider = ({ children }) => {
  const [recipeBody, setRecipeBody] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [item, setItem] = useState("");

  const addToArray = (array, setArray, item) => {
    if (!array.includes(item)) {
      setArray([...array, item]);
    } else {
      alert("você já adicionou esse item!");
    }
  };

  const removeFromArray = (array, setArray, item) => {
    setArray(array.filter((instruc) => instruc !== item));
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
