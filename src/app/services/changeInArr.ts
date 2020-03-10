import { IPost } from '../../types/IPost'

export default (arr: IPost[], newItem: IPost) =>
  arr.map((item) => {
    return item.id === newItem.id
      ? {
          ...newItem,
        }
      : item
  })
