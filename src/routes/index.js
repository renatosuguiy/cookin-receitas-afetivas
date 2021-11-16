import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import RecipesShared from "../pages/RecipesShared";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";
import AddRecipe from "../pages/AddNewRecipe";
import NewRecipePage01 from "../pages/AddNewRecipe/page_1";
import NewRecipePage02 from "../pages/AddNewRecipe/page_2";
import NewRecipePage03 from "../pages/AddNewRecipe/page_3";
import RecipeDetails from "../pages/RecipeDetails";
import RecipesFavorite from "../pages/RecipesFavorite";
import RecipesPrivate from "../pages/RecipesPrivate";
import { Route } from './Route';



export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />


      <Route exact path="/login" component={Login} />

      <Route exact path="/signup" component={SignUp} />

      <Route exact path="/myrecipes" isPrivate component={RecipesPrivate} />

      <Route exact path="/addRecipe" isPrivate component={AddRecipe} />

      <Route exact path="/addRecipe1" isPrivate component={NewRecipePage01} />

      <Route exact path="/addRecipe2" isPrivate component={NewRecipePage02} />

      <Route exact path="/addRecipe3" isPrivate component={NewRecipePage03} />

      <Route exact path="/recipes" isPrivate component={RecipesShared} />

      <Route exact path="/recipes/:idRecipes" isPrivate component={RecipeDetails} />

      <Route exact path="/favorites" isPrivate component={RecipesFavorite} />

    </Switch>
  );
};
