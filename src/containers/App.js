import React, { Component } from 'react'
import TodoList from 'components'

console.log(TodoList);

export class App extends Component {
  render() {
    return <div>
      <h1>TODO (based on redux)</h1>
      <TodoList />
    </div>
  }
}
