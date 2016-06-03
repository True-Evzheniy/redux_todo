import React, { Component } from 'react'
import {VisibleTodoList} from 'containers'

export class App extends Component {
  render() {
    return <div>
      <h1>TODO (based on redux)</h1>
      <VisibleTodoList />
    </div>
  }
}
