import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import {Todo} from 'components'
import { Provider } from 'react-redux'
import configeureStore from 'store'

const store = configeureStore()


render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
)
