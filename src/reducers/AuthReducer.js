import { SET_ITEM, AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOG_OUT } from "../actions/types";

const INITIAL_STATE = {
  email: null,
  uid: null,
  authLoading: false,
  authError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ITEM:
      return { ...state, [action.payload.prop]: action.payload.value };
    case AUTH_START:
      return { ...state, authLoading: true, authError: null, email: null, uid: null };
    case AUTH_SUCCESS:
      return { ...state, email: action.payload.email, uid: action.payload.uid, authLoading: false };
    case AUTH_FAIL:
      return { ...state, authLoading: false, authError: action.payload };
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
