import React from 'react'
import { View } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import style from './style'

const BottomMenu = () => {
  return (
    <View style={style.bototmMenu}>
      <Icon name="home-variant" style={style.icon} />
      <FeatherIcon name="search" style={style.icon} />
      <MaterialIcon name="add-box" style={style.icon} />
      <MaterialIcon name="favorite-border" style={style.icon} />
      <FeatherIcon name="user" style={style.icon} />
    </View>
  )
}

export default BottomMenu
