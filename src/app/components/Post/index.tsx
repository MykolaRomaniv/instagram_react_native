import React, { Component } from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CpmmentIcon from 'react-native-vector-icons/Fontisto'
import { IPost } from './IPost'
import Carousel from 'react-native-snap-carousel'

interface IProps {
  post: IPost
}

class Post extends Component<IProps> {
  _renderItem = ({ item, index }: { item: ImageSourcePropType; index: number }) => {
    return (
      <View>
          <Image source={item} />
      </View>
    )
  }

  _carousel = null

  render() {
    return (
      <View>
        {/*header*/}
        <View>
          {/*avatar */}
          <View>
            <Image source={this.props.post.avatar} />
            {/*header text*/}
            <View>
              <Text>{this.props.post.username}</Text>
              <Text>{this.props.post.location}</Text>
            </View>
          </View>
          <Icon name="more-horiz" />
        </View>
        {/**photo carousel */}
        <View>
          <Carousel
            ref={(c: any) => {
              this._carousel = c
            }}
            data={this.props.post.photos}
            renderItem={this._renderItem}
            sliderWidth={600}
            itemWidth={300}
          />
        </View>
        {/**actions */}
        <View>
          <View>
            <Icon
              name={this.props.post.liked ? 'favorite' : 'favorite-border'}
            />
            <CpmmentIcon name="comment" />
            <Icon name="send" />
          </View>
          <Icon
            name={this.props.post.bookmarked ? 'bookmark' : 'bookmark-border'}
          />
        </View>
        <View>
          <Text>Liked by {this.props.post.likes}</Text>
        </View>
        <View>
          <Text>{this.props.post.comments}</Text>
        </View>
        <View>
          <Text>{this.props.post.hashtags}</Text>
        </View>
      </View>
    )
  }
}

export default Post
