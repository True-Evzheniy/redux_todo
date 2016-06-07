import React from 'react'
import './TodoCategory.scss'


class TodoCategory extends React.Component {
  render () {
    const {
      text,
      id,
      checked,
      deleteCategory,
      checkedCategory
    } = this.props
    return (
      <div className="TodoCategory">
        <input
          id={id+'ch'}
          type="checkbox"
          checked={checked}
          onChange={ () => checkedCategory(id) }
          hidden
          />
        <label
          htmlFor={id+'ch'}
          className="TodoCategory__title">
          {text}
        </label>
        <div className="TodoCategory__delete" onClick={ () => deleteCategory(text, id)}> x </div>
    </div>
  )}
}

export default TodoCategory;
