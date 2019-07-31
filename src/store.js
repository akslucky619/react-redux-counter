import { createStore } from "redux";
// import Redux from "redux";

const initState = {
  count: 0
};

function counterReducer(state = initState, action) {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    case "Reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
