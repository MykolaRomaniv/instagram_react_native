import { IPost } from '../../types/IPost'

export default (arr: IPost[], id: number) =>
  arr.filter((item) => item.id !== id)
