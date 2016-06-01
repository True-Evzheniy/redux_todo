import {
  ADD_TASK,
  CHECKED_TASK,
  DELETE_TASK
} from 'constants'

const task = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        id: action.id,
        text: action.text,
        checked: false
      }
    case CHECKED_TASK:
      return {...state, checked: !state.checked}
    default:
      return state
  }
}

const tasks = (state = [{id: 1, text: 'hui', checked: false}], action) => {
  switch (action.type) {

    case ADD_TASK:
      return [ ...state, task(undefined, action) ]

    case CHECKED_TASK:
      return state.map( (itemTaskList) => {
        if ( itemTaskList.id === action.id ) {
          return task( itemTaskList, action)
        }
        return itemTaskList
      })

    case DELETE_TASK:
      return state.filter( (itemTaskList) => {
        if (itemTaskList.id === action.id) {
          return false
        }
        return true
      })

    default:
      return state
  }
}

export default tasks
