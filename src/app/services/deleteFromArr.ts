import { IPost } from '../../types/types'

export default (arr: IPost[], id: number) =>
  arr.filter((item) => item.id !== id)
