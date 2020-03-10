import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { IPost } from 'src/types/IPost'
import style from './style'

const renderItem = ({ item, index }: { item: IPost; index: number }) => {
  return (
    <View style={style.storyItem}>
      <Image source={{ uri: item.avatar }} style={style.storyAvatar} />
      <Text style={style.username}>{item.username}</Text>
    </View>
  )
}

interface IProps {
  posts: IPost[]
}

const stories = (props: IProps) => {
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
          data={props.posts}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.username}
        />
      </View>
    </View>
  )
}

export default stories
