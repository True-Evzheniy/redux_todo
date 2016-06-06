import React, { Component } from 'react'
import './Todo.scss'
import {
  VisibleTodoList,
  FilterContainer,
  CreatorContainer,
  CategoriesContainer
} from 'containers'

class Todo extends Component {
  render() {
    return <div className="Todo">
      <h1>TODO (based on redux)</h1>
      <CreatorContainer />
      <FilterContainer />
      <CategoriesContainer />
      <VisibleTodoList />
    </div>
  }
}

export default Todo
