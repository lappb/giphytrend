
/* eslint-disable import/prefer-default-export */

export const SET_LOCALE_START = "SET_LOCALE_START";
export const SET_LOCALE_SUCCESS = "SET_LOCALE_SUCCESS";
export const SET_LOCALE_ERROR = "SET_LOCALE_ERROR";

export function setLocale(locale) {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve,reject) => {
      dispatch({
        type: SET_LOCALE_START,
      });
      try{
        dispatch({
          type: SET_LOCALE_SUCCESS,
          locale
        });
        localStorage.setItem('locale',locale);
      }
      catch(ex){
        dispatch({
          type: SET_LOCALE_ERROR
        });
      }
    }
  )}; 
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_LOCALE_START]    : (state, action) => {
    return state;
  },
  [SET_LOCALE_SUCCESS] : (state, action) => {
    return action.locale
  },
  [SET_LOCALE_ERROR] : (state, action) => {
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function intlReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
