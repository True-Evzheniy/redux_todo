import {connect} from 'react-redux'
import {TodoList} from 'components'

const getVisibleTasks = (todos, visibilityFilter, categories) => {
  let filteringTasks;
  switch (visibilityFilter) {
    case 'ALL_TASKS':
      filteringTasks = todos
      break

    case 'COMPLETE_TASKS':
      filteringTasks = todos.filter(item => item.checked)
      break

    case 'ACTIVE_TASKS':
      filteringTasks = todos.filter(item => !item.checked)
      break

    default:
      filteringTasks = todos
  }

  const arrayToFiltering = categories.filter(item => item.checked).map((item => item.text))

  const filtrationOr = (categoriesArray, filters) => {
    let counter = 0;
    categoriesArray.forEach((item)=>{
      if(~filters.indexOf(item)){
        counter++;
      }
    });
    return !!counter;
  }

  if(arrayToFiltering.length) {
    return filteringTasks.filter( (item) => {
      return filtrationOr(item.categories, arrayToFiltering)
    })
  }
  return filteringTasks

}

const mapStateToProps = (state) => ({
  tasks: getVisibleTasks(state.tasks, state.visibilityFilter, state.categories)
})

const visibleTodoList = connect(mapStateToProps)(TodoList)

export default visibleTodoList
