import { IPost } from '../../types/IPost'

export const LOADING_POSTS = 'LOADING_POSTS'
export const GET_POSTS = 'GET_POSTS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const ERROR = 'ERROR'

interface LoadingPostsAction {
  type: typeof LOADING_POSTS
}

interface GetPostsAction {
  type: typeof GET_POSTS
  payload: {
    posts: IPost[]
  }
}

interface ToggleLikeAction {
  type: typeof TOGGLE_LIKE
  payload: {
    post: IPost
  }
}

interface ErrorAction {
  type: typeof ERROR
  payload: {
    errorMsg: string
  }
}

export type ActionTypes =
  | ErrorAction
  | ToggleLikeAction
  | GetPostsAction
  | LoadingPostsAction
