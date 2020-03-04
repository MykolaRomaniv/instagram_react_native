export type IImageUrl = string | ArrayBuffer | null

export interface INewPost {
  createdAt: Date
  imageUrl: IImageUrl
  likes: number
  description: string
  comments: string[] | string
}

export interface IPost extends INewPost {
  id: number
  userName: string
  avatar: IImageUrl
}
