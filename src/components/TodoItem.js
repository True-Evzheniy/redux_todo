import React from 'react'
import './TodoItem.scss'

class TodoItem extends React.Component {
  handleAddCategory () {
    const nodeInput = this.refs.input
    this.props.addCategory(nodeInput.value, this.props.id)
    nodeInput.value = ''
  }
  render () {
    const {
      deleteTask,
      checkedTask,
      editTaskText,
      id,
      text,
      checked
    } = this.props

    return (
      <div className="TodoItem">
        <input
          className="TodoItem__checkbox"
          type="checkbox" checked={checked}
          onChange={() => checkedTask(id)}
          />
        <input
          className="TodoItem__text"
          type="text"
          value={text}
          onChange={ (e) => editTaskText(id, e.target.value) }
          />
        <div
          className="TodoItem__delete" 
          onClick={() => deleteTask(id)}> x </div>
        <input
          className="TodoItem__addCategory"
          ref="input"
          type="text" />
        <button
          className="TodoItem__btn"
          onClick={::this.handleAddCategory}>Добавить категорию</button>
    </div>
  )}
}

export default TodoItem;
