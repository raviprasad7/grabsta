import { FETCH_MERCHANT } from "../actions/types";

const initialState = {
  posts: [],
  isLoading: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MERCHANT:
      return {
        ...state,
        posts: action.payload,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}

export default reducer;
