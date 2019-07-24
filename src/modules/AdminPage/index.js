import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import LayoutView from "./Layout/Layout.view";
import Beranda from "./Beranda";
import DataMaster from "./DataMaster/DataMaster";

function Layout(props) {
  return (
    <LayoutView>
      <Container>
        <Switch>
          <Route strict exact path="/admin" component={Beranda} />
          <Route path="/admin/kategori-berita" component={DataMaster} />
        </Switch>
      </Container>
    </LayoutView>
  );
}

export default withRouter(Layout);
