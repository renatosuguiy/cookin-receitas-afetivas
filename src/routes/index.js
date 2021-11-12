import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import RecipesShared from "../pages/RecipesShared";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";
import AddRecipe from "../pages/AddNewRecipe";
import NewRecipePage01 from "../pages/AddNewRecipe/page_1";
import NewRecipePage02 from "../pages/AddNewRecipe/page_2";
import NewRecipePage03 from "../pages/AddNewRecipe/page_3";
import RecipeDetails from "../pages/RecipeDetails";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/addRecipe">
        <AddRecipe />
      </Route>
      <Route exact path="/addRecipe1">
        <NewRecipePage01 />
      </Route>
      <Route exact path="/addRecipe2">
        <NewRecipePage02 />
      </Route>
      <Route exact path="/addRecipe3">
        <NewRecipePage03 />
      </Route>
      <Route exact path="/recipes">
        <RecipesShared />
      </Route>
      <Route exact path="/recipes/:idRecipes">
        <RecipeDetails />
      </Route>
    </Switch>
  );
};
