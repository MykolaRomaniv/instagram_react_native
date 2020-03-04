import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const BottomMenu = () => {
  return (
    <View>
      <Icon name="home-variant" />
      <FeatherIcon name="search" />
      <MaterialIcon name="add-box" />
      <MaterialIcon name="favorite-border" />
      <FeatherIcon name="user" />
    </View>
  )
}

export default BottomMenu
