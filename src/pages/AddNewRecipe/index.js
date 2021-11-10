import { Route, Switch } from "react-router-dom";
import NewRecipePage01 from "./NewRecipePage01";
import NewRecipePage02 from "./NewRecipePage02";
import NewRecipePage03 from "./NewRecipePage03";

const AddNewRecipe = () => {
  return (
    <Switch>
      <Route exact path="/addNewRecipe">
        <NewRecipePage01 />
      </Route>
      <Route exact path="/newrecipe2">
        <NewRecipePage02 />
      </Route>
      <Route exact path="/newrecipe3">
        <NewRecipePage03 />
      </Route>
    </Switch>
  );
};

export default AddNewRecipe;
