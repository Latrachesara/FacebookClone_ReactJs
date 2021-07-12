import React from "react";
import { Route, Switch } from "react-router-dom";
import Feed from "./../Pages/Feed/Feed";
function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Feed} />
      </Switch>
    </div>
  );
}

export default Router;
