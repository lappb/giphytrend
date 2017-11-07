
/* eslint-disable import/prefer-default-export */

export const HEADER_SIGN_UP_MODAL_SHOW = 'HEADER_SIGN_UP_MODAL_SHOW'
export const HEADER_LOGIN_MODAL_SHOW = 'HEADER_LOGIN_MODAL_SHOW'
export const HEADER_PROFILE_MENU_SHOW = 'HEADER_PROFILE_MENU_SHOW'
export const HEADER_ACTIVITY_MENU_SHOW = 'HEADER_ACTIVITY_MENU_SHOW'
export const HEADER_MESSAGE_MENU_SHOW = 'HEADER_MESSAGE_MENU_SHOW'

export const HOME_POST_ENTRY_MODAL_SHOW = 'HOME_POST_ENTRY_MODAL_SHOW'

export const SET_IS_TOP = 'SET_IS_TOP'

export function setShowSignup () {
  console.log('lapisking')
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: HEADER_SIGN_UP_MODAL_SHOW
      })
    }
  )
  }
}

export function setShowLogin () {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: HEADER_LOGIN_MODAL_SHOW
      })
    }
  )
  }
}

export function setShowProfileMenu (value) {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: HEADER_PROFILE_MENU_SHOW,
        data: value
      })
    }
  )
  }
}

export function setShowActivityMenu (value) {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: HEADER_ACTIVITY_MENU_SHOW,
        data: value
      })
    }
  )
  }
}

export function setShowMessageMenu (value) {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: HEADER_MESSAGE_MENU_SHOW,
        data: value
      })
    }
  )
  }
}

export function setShowPostEntry () {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: HOME_POST_ENTRY_MODAL_SHOW
      })
    }
  )
  }
}

export const setIsTop = (type) => {
  return (dispatch, getState, jsonRequest) => {
    dispatch({
      type: SET_IS_TOP,
      data: type
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [HEADER_SIGN_UP_MODAL_SHOW]    : (state, action) => {
    const isShow = !(state && state.header && state.header.isShowSignup)
    return { ...state,
      header: { isShowSignup: isShow }
    }
  },
  [HEADER_LOGIN_MODAL_SHOW] : (state, action) => {
    const isShow = !(state && state.header && state.header.isShowLogin)
    return { ...state,
      header: { isShowLogin: isShow }
    }
  },
  [HEADER_PROFILE_MENU_SHOW] : (state, action) => {
    const isShow = !(state && state.header && state.header.isShowProfileMenu)
    return { ...state,
      header: { isShowProfileMenu: action.data != undefined ? action.data : isShow }
    }
  },
  [HEADER_ACTIVITY_MENU_SHOW] : (state, action) => {
    const isShow = !(state && state.header && state.header.isShowActivityMenu)
    return { ...state,
      header: { isShowActivityMenu: action.data != undefined ? action.data : isShow }
    }
  },
  [HEADER_MESSAGE_MENU_SHOW] : (state, action) => {
    const isShow = !(state && state.header && state.header.isShowMessageMenu)
    return { ...state,
      header: { isShowMessageMenu: action.data != undefined ? action.data : isShow }
    }
  },
  [HOME_POST_ENTRY_MODAL_SHOW] : (state, action) => {
    const isShow = !(state && state.home && state.home.isShowPostEntry)
    return { ...state,
      home: { isShowPostEntry: isShow }
    }
  },
  [SET_IS_TOP]    : (state, action) => {
    return { ...state,
      header: { isTop: action.data }
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { header:{}, home:{} }
export default function layoutReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
