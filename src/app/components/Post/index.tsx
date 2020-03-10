import React, { Component } from 'react'
import { Dimensions, FlatList, Image, Text, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { IPost } from '../../../types/IPost'
import * as actions from '../../redux/actions'
import { ActionTypes } from '../../redux/types'
import style from './style'

interface IProps extends ConnectedProps<typeof connector> {
  post: IPost
}

interface IState {
  activePhoto: number
}

class Post extends Component<IProps, IState> {
  state = {
    activePhoto: 0,
  }

  likePressedHandler = () => {
    console.log('1')
    this.props.actions.toggleLike(this.props.post)
  }

  _renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View>
        <Image source={{ uri: item }} style={{ width: '100%', height: 350 }} />
      </View>
    )
  }

  _renderComment = ({ item, index }: { item: string; index: number }) => {
    return <Text>{item + ' '}</Text>
  }

  _renderHashtag = ({ item, index }: { item: string; index: number }) => {
    return <Text style={style.hashtags}>{'#' + item + ' '}</Text>
  }

  _carousel = null

  render() {
    return (
      <View>
        <View style={style.header}>
          <View style={style.avatar}>
            <Image
              source={{ uri: this.props.post.avatar }}
              style={style.avatarImg}
            />
            <View style={style.avatarText}>
              <Text style={style.username}>{this.props.post.username}</Text>
              <Text>{this.props.post.location}</Text>
            </View>
          </View>
          <Icon name="more-horiz" style={style.icon} />
        </View>
        <Carousel
          ref={(c: any) => {
            this._carousel = c
          }}
          data={this.props.post.photos}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          onSnapToItem={(index) => this.setState({ activePhoto: index })}
        />
        <View style={style.actionIcons}>
          <View style={style.innerIcons}>
            <AntDesignIcon
              name={this.props.post.liked ? 'heart' : 'hearto'}
              style={style.icon}
              onPress={this.likePressedHandler}
            />
            <FontistoIcon name="comment" style={style.icon} />
            <FeatherIcon name="send" style={style.icon} />
            <Pagination
              dotsLength={this.props.post.photos.length}
              activeDotIndex={this.state.activePhoto}
              containerStyle={style.pagContainer}
              dotStyle={style.dot}
            />
          </View>
          <Icon
            name={this.props.post.bookmarked ? 'bookmark' : 'bookmark-border'}
            style={style.icon}
          />
        </View>
        <View style={style.commentSection}>
          <Text>Liked by {this.props.post.likes}</Text>
          <FlatList
            data={this.props.post.comments}
            renderItem={this._renderComment}
            horizontal={true}
            keyExtractor={(item) => item}
          />
          <FlatList
            data={this.props.post.hashtags}
            renderItem={this._renderHashtag}
            horizontal={true}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  actions: bindActionCreators(actions, dispatch),
})

const connector = connect(null, mapDispatchToProps)

export default connector(Post)
