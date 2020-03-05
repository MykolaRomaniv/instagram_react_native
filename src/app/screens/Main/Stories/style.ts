import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    margin: 10,
    fontSize: 14,
    lineHeight: 16,
  },
  watchAll: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    lineHeight: 16,
    margin: 10,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyAvatar: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 74 / 2,
    width: 70,
    height: 70,
  },
  username: {
    fontWeight: 'bold',
  },
})

export default styles
