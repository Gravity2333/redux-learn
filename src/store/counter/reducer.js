import { ADD_NUM, SUB_NUM } from "./constants";

const initialState = {
  num: 0,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUM:
      return {
        ...state,
        num: state.num + action.payload,
      };
    case SUB_NUM:
      return {
        ...state,
        num: state.num - action.payload,
      };
    default:
      return state;
  }
}
