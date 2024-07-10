import { SET_BANNER_INFO } from "./constants";

const initialState = {
  bannerInfo: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_BANNER_INFO:
      return {
        ...state,
        bannerInfo: action.payload,
      };
    default:
      return state;
  }
}
