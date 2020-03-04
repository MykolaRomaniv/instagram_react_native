import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Carousel from 'react-native-snap-carousel'
import { IPost } from '../../../../components/Post/IPost'

const TEST_USER = {
  photo: require('../../../../assets/Avatar.png'),
  username: 'vasya',
}

class Carusele extends Component {
  _renderItem = ({ item, index }: { item: IPost; index: number }) => {
    return (
      <View>
        <Image source={require('../../../../assets/Avatar.png')} />
        <Text>{item.username}</Text>
      </View>
    )
  }

  _carousel = null

  state = {
    users: [],
  }

  componentDidMount() {
    this.setState({
      users: [TEST_USER, TEST_USER, TEST_USER, TEST_USER],
    })
  }

  render() {
    return (
      <View>
        <Text>Stories</Text>
        <View>
          <Icon name="play-arrow" />
          <Text>Watch all</Text>
        </View>
        <View>
          <Carousel
            ref={(c: any) => {
              this._carousel = c
            }}
            data={this.state.users}
            renderItem={this._renderItem}
            sliderWidth={300}
            itemWidth={50}
          />
        </View>
      </View>
    )
  }
}

export default Carusele
