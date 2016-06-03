import { combineReducers } from 'redux'
import tasks from './tasks'
import visibilityFilter from './filter'
import {categories} from './categories'

export default combineReducers({
  tasks,
  visibilityFilter,
  categories
})
