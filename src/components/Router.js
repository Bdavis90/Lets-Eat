import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} exact />
        <Route exact path="/recipe/:id" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
