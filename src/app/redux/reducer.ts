import * as actionTypes from './types'
import change from '../services/changeInArr'
import del from '../services/deleteFromArr'
import { IPost } from '../../types/IPost'

interface IPostStorage {
  isLoading: boolean
  posts: IPost[]
}

const initialState: IPostStorage = {
  isLoading: false,
  posts: [],
}

const reducer = (
  state = initialState,
  action: actionTypes.ActionTypes,
): IPostStorage => {
  switch (action.type) {
    case actionTypes.LOADING_POSTS:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_POSTS:
      return {
        isLoading: false,
        posts: action.payload.posts,
      }
    case actionTypes.TOGGLE_LIKE:
      console.log('3')
      return {
        ...state,
        posts: change(state.posts, action.payload.post),
      }
    case actionTypes.ERROR:
      return state
    default:
      return state
  }
}

export default reducer
