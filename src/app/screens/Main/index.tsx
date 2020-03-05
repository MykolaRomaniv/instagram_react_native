import React from 'react'
import { FlatList } from 'react-native'
import { Divider } from 'react-native-paper'

import BottomMenu from '../../components/BottomMenu'
import Post from '../../components/Post'
import Header from './Header'
import Stories from './Stories'

const PHOTO = require('../../assets/Photo.png')

const TEST_POST = {
  //   id: 1,
  avatar: require('../../assets/Avatar.png'),
  username: 'pieroborgo',
  location: 'Milan, Italy',
  photos: [PHOTO, PHOTO, PHOTO],
  liked: false,
  bookmarked: false,
  likes: 5555,
  comments: ['lalala', 'asdadqdewwfghgfdsfgd', 'asdasdsadasd'],
  hashtags: ['qwert', 'uhhbhjkmmk', 'ojnufykmnn'],
}

const DATA = [TEST_POST, TEST_POST, TEST_POST, TEST_POST, TEST_POST, TEST_POST]

const main = () => {
  return (
    <>
      <Header />
      <Divider />
      <Stories />
      <Divider />
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => <Post post={{ id: index, ...item }} />}
        showsHorizontalScrollIndicator={false}
      />
      <BottomMenu />
    </>
  )
}

export default main
