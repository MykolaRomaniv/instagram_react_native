import { IPost } from '../../types/IPost'
import { RootState } from '../boot/setup'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import axios from '../services/axios'
import * as actionTypes from './types'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const getPosts = (): AppThunk => (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_POSTS,
  })

  axios
    .get('/posts.json')
    .then((res) => {
      dispatch({
        type: actionTypes.GET_POSTS,
        payload: {
          posts: Object.values(res.data),
        },
      })
    })
    .catch((error) => {
      // console.log('error', error)
    })
}

export const toggleLike = (post: IPost): actionTypes.ActionTypes => {
  console.log('2')
  return {
    type: actionTypes.TOGGLE_LIKE,
    payload: {
      post: post.liked
        ? { likes: post.likes - 1, liked: !post.liked, ...post }
        : { likes: post.likes + 1, liked: !post.liked, ...post },
    },
  }
}

// export const toggleBookmark = (post: IPost): AppThunk => (dispatch) => {
//   let newPost = post.bookmarked
//     ? { bookmarked: !post.bookmarked, ...post }
//     : { bookmarked: !post.bookmarked, ...post }
//   axios.put('/posts', newPost).then((res) => {
//     dispatch({
//       type: actionTypes.TOGGLE_LIKE,
//       payload: {
//         post: {
//           ...res.data,
//         },
//       },
//     })
//   })
// }
