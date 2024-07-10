import {  SET_BANNER_INFO,} from "./constants";

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
