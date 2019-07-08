export const Module = {};

const dispatchAction = (dispatch, type, data) => {
  dispatch({ type, payload: data });
};

Module.set_name = () => {
  return dispatch => {
    dispatchAction(dispatch, "SET_NAME", "Gua Diganti");
  };
};
