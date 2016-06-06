
import { SET_VISIBILITY_FILTER } from 'constants'
const initialState = 'ALL_TASKS'

const visibilityFilter = (state = initialState, action) => {

  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default: return state
  }

}

export default visibilityFilter
