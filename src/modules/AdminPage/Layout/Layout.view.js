import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import SideBar from "./View/Sidebar";
import Content from "./View/Content";

function LayoutView(props) {
  const data = useSelector(state => state.LayoutReducers);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <SideBar
        toggle={() => dispatch({ type: "SET_TOGLE" })}
        isOpen={data.isOpen}
      />
      <Content
        toggle={() => dispatch({ type: "SET_TOGLE" })}
        isOpen={data.isOpen}
      >
        {props.children}
      </Content>
    </div>
  );
}

export default withRouter(LayoutView);
