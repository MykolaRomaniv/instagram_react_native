import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  avatar: {
    flexDirection: 'row',
  },
  avatarImg: {
    width: 35,
    height: 35,
  },
  avatarText: {
    marginLeft: 5,
    fontSize: 13.5,
    lineHeight: 16,
  },
  username: {
    fontWeight: 'bold',
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  innerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 7,
    fontSize: 25,
  },
  commentSection: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  hashtags: {
    color: '#003569',
  },
  pagContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingLeft: 70,
  },
  dot: {
    backgroundColor: '#3898F3',
  },
})

export default styles
