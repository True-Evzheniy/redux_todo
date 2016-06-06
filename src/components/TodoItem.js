import React from 'react'

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

    return <div>
      <input
        className="TodoItem__checkbox"
        type="checkbox" checked={checked}
        onChange={() => checkedTask(id)}
        />
      <input
        type="text"
        value={text}
        onChange={ (e) => editTaskText(id, e.target.value) }
        />
      <div className="TodoItem__delete" onClick={() => deleteTask(id)}> x </div>
      <input ref="input" className="TodoItem__addCategory" type="text" />
      <button className="TodoItem__btn" onClick={::this.handleAddCategory}>Добавить категорию</button>
    </div>
  }
}

export default TodoItem;
