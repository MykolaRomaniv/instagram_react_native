import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Divider } from 'react-native-paper'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { IPost } from '../../../types/IPost'
import { RootState } from '../../boot/setup'
import BottomMenu from '../../components/BottomMenu'
import Post from '../../components/Post'
import * as actions from '../../redux/actions'
import { ActionTypes } from '../../redux/types'
import Header from './Header'
import Stories from './Stories'

interface IProps extends ConnectedProps<typeof connector> {
  posts: IPost[]
}

class main extends Component<IProps, {}> {
  componentDidMount = () => {
    this.props.actions.getPosts()
  }

  render() {
    return (
      <>
        <Header />
        <Divider />
        <Stories posts={this.props.posts} />
        <Divider />
        <FlatList
          data={this.props.posts}
          renderItem={({ item, index }) => <Post post={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />
        <BottomMenu />
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    posts: state.posts.posts,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  actions: bindActionCreators(actions, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(main)
