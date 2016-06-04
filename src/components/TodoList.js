import React from 'react'
import {TodoItem} from 'components'

class TodoList extends React.Component {
  render () {
    return <div className="TodoList">
      {
        this.props.tasks.map((task)=>(<TodoItem
          text={task.text}
          key={task.id}
          id={task.id}
          checked={task.checked}
          checkedTask={this.props.checkedTask}
          editTaskText={this.props.editTaskText}
          deleteTask={this.props.deleteTask}
          />
        ))
      }
    </div>
  }
}

export default TodoList;
