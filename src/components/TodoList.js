import React from 'react'
import {TodoItem} from 'components'

console.log(TodoItem);
class TodoList extends React.Component {
  render () {
    console.log(this.props.tasks);
    return <div className="TodoList">
      {
        this.props.tasks.map((task)=>(<TodoItem
          text={task.text}
          key={task.id}
          id={task.id}
          checked={task.checked}
          />
        ))
      }
    </div>
  }
}

export default TodoList;
