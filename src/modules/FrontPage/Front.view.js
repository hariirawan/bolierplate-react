import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function FrontView(props) {
  const data = useSelector(state => state.login);
  return (
    <Fragment>
      {!data.login ? <Redirect to="/login" /> : <Redirect to="/admin" />}
    </Fragment>
  );
}

export default FrontView;
