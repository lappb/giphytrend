import { user_V1, getRequest, postRequest } from '../constants/linkApi'
import { browserHistory } from 'react-router'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_USER_LOGIN_START = 'LOAD_USER_LOGIN_START'
export const LOAD_USER_LOGIN_SUCCESS = 'LOAD_USER_LOGIN_SUCCESS'
export const LOAD_USER_LOGIN_ERROR = 'LOAD_USER_LOGIN_ERROR'

export const LOGIN_STARTTING = 'LOGIN_STARTTING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_STARTTING = 'LOGOUT_STARTTING'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

// ------------------------------------
// Actions
// ------------------------------------
export const getUserLogin = () => {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve) => {
      dispatch({
        type    : LOAD_USER_LOGIN_START,
        payload : getState().counter
      })

      try {
        const req = jsonRequest(user_V1.PROFILE, getRequest, {})
        req.then(data => {
          console.log(data)
          if (!data) {
            dispatch({
              type    : LOAD_USER_LOGIN_ERROR,
              payload : {}
            })
          } else {
            dispatch({
              type    : LOAD_USER_LOGIN_SUCCESS,
              user : data
            })
          }
        })
      } catch (ex) {
        dispatch({
          type    : LOAD_USER_LOGIN_ERROR,
          payload : {}
        })
      }

      resolve()
    })
  }
}

export const login = (user) => {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve) => {
      dispatch({
        type    : LOGIN_STARTTING,
        payload : getState().counter
      })

      try {
        const { values } = getState().form.login
        const req = jsonRequest(user_V1.LOGIN, postRequest, values)
        req.then(data => {
          console.log(data)
          if (!data) {
            dispatch({
              type    : LOGIN_FAIL,
              payload : {}
            })
          } else {
            dispatch({
              type    : LOGIN_SUCCESS,
              user : data
            })
            browserHistory.push('/explore/trending')
          }
        })
      } catch (ex) {
        dispatch({
          type    : LOGIN_FAIL,
          payload : {}
        })
      }

      resolve()
    })
  }
}

export const logout = () => {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve) => {
      dispatch({
        type    : LOGOUT_STARTTING,
        payload : getState().counter
      })

      try {
        const req = jsonRequest(user_V1.LOGOUT, getRequest)
        req.then(data => {
          console.log(data)
          if (!data) {
            dispatch({
              type    : LOGOUT_FAIL
            })
          } else {
            dispatch({
              type    : LOGOUT_SUCCESS
            })
            browserHistory.push('/login')
          }
        })
      } catch (ex) {
        dispatch({
          type    : LOGIN_FAIL,
          payload : {}
        })
      }

      resolve()
    })
  }
}

const ACTION_HANDLERS = {
  [LOAD_USER_LOGIN_START]    : (state, action) => {
    return state
  },
  [LOAD_USER_LOGIN_SUCCESS] : (state, action) => {
    return {
      ...state,
      ...action.user
    }
  },
  [LOAD_USER_LOGIN_ERROR] : (state, action) => {
    return state
  },
  [LOGIN_STARTTING]    : (state, action) => {
    return state
  },
  [LOGIN_SUCCESS] : (state, action) => {
    localStorage.setItem('token', `Bearer ${action.user.token}`)
    // return state;
    return {
      ...state,
      ...action.user
    }
  },
  [LOGIN_FAIL] : (state, action) => {
    return state
  },
  [LOGOUT_STARTTING]    : (state, action) => {
    return state
  },
  [LOGOUT_SUCCESS] : (state, action) => {
    localStorage.removeItem('token')
    // return state;
    return {
      ...state,
      user: {}
    }
  },
  [LOGOUT_FAIL] : (state, action) => {
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
