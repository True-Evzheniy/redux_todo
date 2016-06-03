import React from 'react'

class TodoItem extends React.Component {
  // handleCheked () {
  //   this.props.checkedTask(this.props.id)
  // }
  render () {
    return <div>
      <input className="TodoItem__checkbox" type="checkbox" checked={this.props.checked} onChange={::this.props.checkedTask}/>
      <input type="text" value={this.props.text} />
    </div>
  }
}

export default TodoItem;
