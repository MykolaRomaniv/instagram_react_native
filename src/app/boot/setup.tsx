import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import App from '../App'
import reducer from '../redux/reducer'

const rootReducer = combineReducers({
  posts: reducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
)

const Setup = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Setup
