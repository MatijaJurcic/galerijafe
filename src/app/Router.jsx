import { Switch, Route, Redirect } from "react-router-dom";
import { AppLogin } from "./auth/AppLogin";
import { AppRegister} from "./auth/AppRegister"
const Router = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/" />;
        }}
      />
      <Route exact path="/login">
        <AppLogin />
      </Route>
      <Route exact path="/register">
        <AppRegister />
      </Route>
    </Switch>
  );
};

export default Router;
