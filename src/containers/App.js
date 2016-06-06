import React, { Component } from 'react'
import {VisibleTodoList} from 'containers'
import {FilterContainer} from 'containers'
import {CreatorContainer} from 'containers'

export class App extends Component {
  render() {
    return <div>
      <h1>TODO (based on redux)</h1>
      <CreatorContainer />
      <FilterContainer />
      <VisibleTodoList />
    </div>
  }
}
