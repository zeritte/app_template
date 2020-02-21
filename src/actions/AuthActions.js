import { SET_ITEM, AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOG_OUT } from "./types";

export const setItem = (prop, value) => dispatch =>
  dispatch({ type: SET_ITEM, payload: { prop, value } });

export const login = (email, password, navigation) => dispatch => {
  dispatch({ type: AUTH_START });
};

export const signOut = navigation => dispatch => {
  dispatch({ type: LOG_OUT });
  navigation.navigate("Splash");
};
