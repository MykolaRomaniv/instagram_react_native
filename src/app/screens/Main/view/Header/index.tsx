import React from 'react'
import { View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const header = () => {
  return (
    <View>
      <Icon name="photo-camera" />
      <Image source={require('../../../../assets/Instagram-Logo.png')} />
      <Icon name="send" />
    </View>
  )
}

export default header
