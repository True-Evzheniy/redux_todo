import React from 'react'
import {TodoCategory} from 'components'

class TodoCategories extends React.Component {
  render () {
    const {
      categories,
      deleteCategory,
      checkedCategory
    } = this.props
    return (
      <div className="Todo__Categories">
      {
        categories.map( item => (
          <TodoCategory
            key={item.id}
            id={item.id}
            text={item.text}
            checked={item.checked}
            checkedCategory={checkedCategory}
            deleteCategory={deleteCategory}
            />
        ))
      }
    </div>
  )}
}

export default TodoCategories;
