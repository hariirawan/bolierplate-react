import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./assets/css/global.css";
import "./assets/css/table.css";
import "./assets/css/costum.scss";

import LoginView from "./modules/Login/Login.view";
import { useSelector } from "react-redux";
import AdminPage from "./modules/AdminPage";
import FrontView from "./modules/FrontPage/Front.view";

function PrivateRoute({ component: Component, props }) {
  const data = useSelector(state => state.login);
  return (
    <Route
      {...props}
      render={props =>
        data.login ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={FrontView} />
          <PrivateRoute path="/admin" component={AdminPage} />
          <Route path="/login" component={LoginView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
