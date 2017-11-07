import {languages} from '../config';

export const LOAD_LOCALE_START = "LOAD_LOCALE_START";
export const LOAD_LOCALE_SUCCESS = "LOAD_LOCALE_SUCCESS";
export const LOAD_LOCALE_ERROR = "LOAD_LOCALE_ERROR";

export const getLocale = () => {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve,reject) => {
      dispatch({
        type: LOAD_LOCALE_START,
      });
      try{
        dispatch({
          type: LOAD_LOCALE_SUCCESS,
          list: languages
        });
        let locale = localStorage.getItem('locale');
        if(locale == null){
          localStorage.setItem('locale','en');
        }
      }
      catch(ex){
        dispatch({
          type: LOAD_LOCALE_ERROR
        });
        reject(ex);
      }
    }
  )}; 
}
const ACTION_HANDLERS = {
 [LOAD_LOCALE_START]    : (state, action) => {
    return state;
  },
  [LOAD_LOCALE_SUCCESS] : (state, action) => {
    return [
      ...state,
      ...action.list
    ]
  },
  [LOAD_LOCALE_ERROR] : (state, action) => {
    return state
  }
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function runtimeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}