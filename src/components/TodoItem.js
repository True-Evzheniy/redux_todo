import React from 'react'

class TodoItem extends React.Component {
  render () {
    const {
      deleteTask,
      checkedTask,
      editTaskText,
      id,
      text,
      checked
    } = this.props

    return <div>
      <input
        className="TodoItem__checkbox"
        type="checkbox" checked={checked}
        onChange={() => checkedTask(id)}
        />
      <input
        type="text"
        value={text}
        onChange={(e) => editTaskText(id, e.target.value) }
        />
      <div className="TodoItem__delete" onClick={() => deleteTask(id)}> x </div>
    </div>
  }
}

export default TodoItem;
