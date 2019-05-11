/*
 ** Types
 */

export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE: 'users/REMOVE',
  CENTRALIZE: 'users/CENTRALIZE',
};

/*
 ** Reducers
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  latitude: -3.730307943261557,
  longitude: -38.52220178863914,
  error: null,
  // viewport: {
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  //   latitude: -3.730307943261557,
  //   longitude: -38.52220178863914,
  //   zoom: 14,
  // },
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.data],
        loading: false,
        error: null,
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE:
      return { ...state, data: state.data.filter(user => user.id !== action.payload.user.id) };
    // case Types.CENTRALIZE:
    //   console.log(action.payload.user.cordinates.latitude);
    //   return {
    //     ...state,
    //     latitude: action.payload.user.cordinates.latitude,
    //     longitude: action.payload.user.cordinates.longitude,
    //   };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: (user, cordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { user, cordinates },
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  removeUser: user => ({
    type: Types.REMOVE,
    payload: { user },
  }),
  // centralizeUser: user => ({
  //   type: Types.CENTRALIZE,
  //   payload: { user },
  // }),
};
