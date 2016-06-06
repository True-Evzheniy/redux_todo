import React from 'react'

class TodoCategory extends React.Component {
  render () {
    const {
      text,
      id,
      checked,
      deleteCategory,
      checkedCategory
    } = this.props
    return <div className="TodoCategory">
      <label className="TodoCategory__title">
        <input type="checkbox" checked={checked} onChange={ () => checkedCategory(id) } />
        {text}
      </label>
      <div className="TodoCategory__delete" onClick={ () => deleteCategory(text, id)}> x </div>
    </div>
  }
}

export default TodoCategory;
