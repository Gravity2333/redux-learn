import { ADD_NUM,  SUB_NUM } from "./constants";

export function addNumAction(num) {
  return {
    type: ADD_NUM,
    payload: num,
  };
}

export function subNumAction(num) {
  return {
    type: SUB_NUM,
    payload: num,
  };
}
