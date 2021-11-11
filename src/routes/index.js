import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";
import AddNewRecipe from "../pages/AddNewRecipe/index";
import NewRecipePage02 from "../pages/AddNewRecipe/index2";
import NewRecipePage03 from "../pages/AddNewRecipe/index3";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/w">
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
      <Route exact path="/">
        <AddNewRecipe />
      </Route>
      <Route exact path="/addRecipe2">
        <NewRecipePage02 />
      </Route>
      <Route exact path="/addRecipe3">
        <NewRecipePage03 />
      </Route>
    </Switch>
  );
};
