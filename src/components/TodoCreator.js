import React from 'react'

class TodoCreator extends React.Component {
  handleCreateBtn () {
    const {addTask} = this.props
    let nodeInput = this.refs.input
    addTask(nodeInput.value)
    nodeInput.value = ''
  }

  render () {
    return <div className="TodoCreator">
      <input className="TodoCreator__input" ref="input" type="text" />
      <button className="TodoCreator__btn" onClick={::this.handleCreateBtn}>Добавить</button>
    </div>
  }
}

export default TodoCreator;
