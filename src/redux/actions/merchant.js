import { FETCH_MERCHANT } from "./types";

export const fetchMerchant = () => (dispatch) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  }).then(() => {
    dispatch({
      type: FETCH_MERCHANT,
      payload: {},
      isLoading: false,
    });
  });
};
