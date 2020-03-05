import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import style from './style'

const TEST_USER = {
  photo: require('../../../assets/Avatar.png'),
  username: 'vasya',
}

const USERS = [
  TEST_USER,
  TEST_USER,
  TEST_USER,
  TEST_USER,
  TEST_USER,
  TEST_USER,
  TEST_USER,
]

const renderItem = ({
  item,
  index,
}: {
  item: typeof TEST_USER
  index: number
}) => {
  return (
    <View style={style.storyItem}>
      <Image
        source={require('../../../assets/Avatar.png')}
        style={style.storyAvatar}
      />
      <Text style={style.username}>{item.username}</Text>
    </View>
  )
}

const stories = () => {
  return (
    <View>
      <View style={style.textContainer}>
        <Text style={style.text}>Stories</Text>
        <View style={style.watchAll}>
          <Icon name="play-arrow" />
          <Text>Watch all</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={USERS}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default stories
