import React from 'react'

class TodoItem extends React.Component {
  render () {
    return <div>
      <input className="TodoItem__checkbox" type="checkbox" checked={this.props.checked} />
      <input type="text" value={this.props.text} />
    </div>
  }
}

export default TodoItem;
