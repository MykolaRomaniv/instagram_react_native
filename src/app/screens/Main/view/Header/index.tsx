import React from 'react'
import { View, Image } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import style from './style'

const header = () => {
  return (
    <View style={style.container}>
      <SimpleLineIcon name="camera" style={style.icons} />
      <Image source={require('../../../../assets/Instagram-Logo.png')} />
      <FeatherIcon name="send" style={style.icons} />
    </View>
  )
}

export default header
