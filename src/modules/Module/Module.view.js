import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Module } from "./Module.actions";
import DataTables from "./view/DataTables";
import { table } from "./config/definition";

function ModuleView(props) {
  return (
    <div>
      <DataTables columns={table} data={props.data} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.ModuleReducers.data
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
