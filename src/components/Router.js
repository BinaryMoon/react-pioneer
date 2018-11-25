import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../screens/NotFound";
import Home from '../screens/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
