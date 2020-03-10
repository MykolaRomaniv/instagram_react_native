import { ImageSourcePropType } from 'react-native'

export interface IPost {
  id: number
  avatar: string
  username: string
  location: string
  photos: string[]
  liked: boolean
  bookmarked: boolean
  likes: number
  comments: string[]
  hashtags: string[]
}
