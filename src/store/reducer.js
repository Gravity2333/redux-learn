import { ADD_NUM, SET_BANNER_INFO, SUB_NUM } from "./constants";

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
    case SET_BANNER_INFO:
        return {
          ...state,
          bannerInfo: action.payload,
        };
    default:
      return state;
  }
}
