import React, { Component } from 'react'
import {
  VisibleTodoList,
  FilterContainer,
  CreatorContainer,
  CategoriesContainer
} from 'containers'

class Todo extends Component {
  render() {
    return <div>
      <h1>TODO (based on redux)</h1>
      <CreatorContainer />
      <FilterContainer />
      <VisibleTodoList />
      <CategoriesContainer />
    </div>
  }
}

export default Todo
