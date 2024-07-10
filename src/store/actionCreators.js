import { ADD_NUM, SET_BANNER_INFO, SUB_NUM } from "./constants";

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

function setBannerInfoAction(info) {
  return {
    type: SET_BANNER_INFO,
    payload: info,
  };
}

export function fetchBannerInfoAction() {
  return async (dispatch, getState) => {
    dispatch(
      setBannerInfoAction(
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve("BANNER INFOS FORM SERVER!");
          }, 2000);
        })
      )
    );
  };
}
