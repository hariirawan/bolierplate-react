import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Module } from "./Module.actions";
import Form from "./config/form";

function ModuleView(props) {
  return (
    <div>
      {props.name}

      {
        Form.form_create.map((data, key) => {
          
        })
      }

      <button onClick={() => props.action.set_name()}>Ganti Nama</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name: state.ModuleReducers.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(
      {
        set_name: Module.set_name
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleView);
