import 'whatwg-fetch'
import { giphyV1, getRequest, postRequest, putRequest } from '../../.././constants/linkApi'

// ------------------------------------
// Constants
// ------------------------------------

const amountItemPage = 20
const giphyClientId = 'ZgBC0qxnpXJfzZIx86bmZTmAOAbywrwt'

export const GET_GIF_TREND_STARTING = 'GET_GIF_TREND_STARTING'
export const GET_GIF_TREND_SUCCESS = 'GET_GIF_TREND_SUCCESS'
export const GET_GIF_TREND_FAILED = 'GET_GIF_TREND_FAILED'

// ------------------------------------
// Actions
// ------------------------------------

export const getGifTrend = (offset) => {
  return (dispatch, getState, jsonRequest) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: GET_GIF_TREND_STARTING
      })
      try {
        const req = jsonRequest(false,
          `${giphyV1.GET_GIF_TREND}?api_key=${giphyClientId}&offset=${offset}&limit=${amountItemPage}&rating=G`,
          getRequest, {})
        req.then(res => {
          const data = res
          if (!data) {
            dispatch({
              type    : GET_GIF_TREND_FAILED,
              payload : {}
            })
          } else {
            dispatch({
              type: GET_GIF_TREND_SUCCESS,
              data
            })
          }
        })
      } catch (ex) {
        dispatch({
          type: GET_GIF_TREND_FAILED
        })
        reject(ex)
      }
    }
  )
  }
}

export const actions = {
  getGifTrend
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_GIF_TREND_SUCCESS]    : (state, action) => {
    return { ...state,
      gifs: [...state.gifs, ...action.data.data],
      offset: action.data.pagination.offset }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { gifs:[] }
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
