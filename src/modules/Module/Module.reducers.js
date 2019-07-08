const initalState = {
  name: "Hari Irawan",
  data: ""
};

export default function ModuleReducers(state = initalState, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
