import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "./Module/Module.view";
import LayoutView from "./Layout/Layout.view";

function Layout(props) {
  return (
    <LayoutView>
      <Container>
        <Switch>
          <Route strict exact path="/admin" component={Home} />
        </Switch>
      </Container>
    </LayoutView>
  );
}

export default withRouter(Layout);
