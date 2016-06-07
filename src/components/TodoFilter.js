import React from 'react'
import  './TodoFilter.scss'

class TodoFilter extends React.Component {
  render () {
    const {
      filterMask,
      setVisibilityFilter
    } = this.props
    return (
      <div className="TodoFilter" onChange={(e)=>setVisibilityFilter(e.target.value)}>
        <input
          id="ALL_TASKS"
          type="radio"
          value="ALL_TASKS"
          name="TodoFilter"
          defaultChecked={filterMask.ALL_TASKS}
          hidden />
        <label
          className="TodoFilter__toggle"
          htmlFor="ALL_TASKS">Все</label>
        <input
          id="COMPLETE_TASKS"
          type="radio"
          value="COMPLETE_TASKS"
          name="TodoFilter"
          defaultChecked={filterMask.COMPLETE_TASKS}
          hidden />
        <label
          className="TodoFilter__toggle"
          htmlFor="COMPLETE_TASKS">Завершенные</label>
        <input
          id="ACTIVE_TASKS" type="radio"
          value="ACTIVE_TASKS"
          name="TodoFilter"
          defaultChecked={filterMask.ACTIVE_TASKS}
          hidden />
        <label
          className="TodoFilter__toggle"
          htmlFor="ACTIVE_TASKS">Активные</label>
      </div>
  )}
}

export default TodoFilter;
