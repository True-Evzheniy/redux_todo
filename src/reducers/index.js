import { combineReducers } from 'redux'
import tasks from './tasks'
import visibilityFilter from './filter'

export default combineReducers({
  tasks,
  visibilityFilter
})
