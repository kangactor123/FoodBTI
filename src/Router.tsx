import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
