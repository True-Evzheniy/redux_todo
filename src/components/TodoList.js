import React from 'react'
import {TodoItem} from 'components'

class TodoList extends React.Component {
  render () {
    const {
      tasks,
      checkedTask,
      editTaskText,
      deleteTask
    } = this.props
    return <div className="TodoList">
      {
        tasks.map((task)=>(<TodoItem
          text={task.text}
          key={task.id}
          id={task.id}
          checked={task.checked}
          checkedTask={checkedTask}
          editTaskText={editTaskText}
          deleteTask={deleteTask}
          />
        ))
      }
    </div>
  }
}

export default TodoList;
