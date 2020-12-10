import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import TableRegister from "../pages/TableRegister";
import TeamRegister from "../pages/TeamRegister";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/team-register" component={TeamRegister} />
      <Route path="/table-register" component={TableRegister} />
    </BrowserRouter>
  );
}

export default Routes;
