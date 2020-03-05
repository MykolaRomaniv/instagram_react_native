import { ImageSourcePropType } from 'react-native'

export interface IPost {
  id: number
  avatar: ImageSourcePropType
  username: string
  location: string
  photos: ImageSourcePropType[]
  liked: boolean
  bookmarked: boolean
  likes: number
  comments: string[]
  hashtags: string[]
}
