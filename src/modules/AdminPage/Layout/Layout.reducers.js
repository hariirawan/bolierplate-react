const initalState = {
  isOpen: false
};

export default function LayoutReducers(state = initalState, action) {
  switch (action.type) {
    case "SET_TOGLE":
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
}
