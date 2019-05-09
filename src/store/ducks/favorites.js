/*
 ** Types
 */

export const Types = {
  ADD_REQUEST: 'favorite/ADD_REQUEST',
  ADD_SUCCESS: 'favorite/ADD_SUCCESS',
  ADD_FAILURE: 'favorite/ADD_FAILURE',
};

/*
 ** Reducers
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorite(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),

  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
