const initialState = {
  fetching: false,
  fetched: false,
  payload: {},
  login: false
};

export default function LoginReducers(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return { ...state, fetching: true };
    case "RECEIVE_LOGIN":
      return {
        ...state,
        payload: action.payload,
        login: true,
        fetching: false
      };
    case "FAILURE_LOGIN":
      return { ...state, fetchin: false };
    default:
      return state;
  }
}
