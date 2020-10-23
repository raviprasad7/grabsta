import { FETCH_POSTS, CREATE_POST, LIKE_POST } from "../actions/types";

const initialState = {
  posts: [],
  isLoading: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoading: action.isLoading,
      };
    case CREATE_POST:
      break;
    case LIKE_POST:
      return {
        ...state,
        isLiked: true,
      };
    default:
      return state;
  }
}

export default reducer;
