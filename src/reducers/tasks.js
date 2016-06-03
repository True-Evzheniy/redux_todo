import {
  ADD_TASK,
  CHECKED_TASK,
  DELETE_TASK,
  DELETE_CATEGORY,
  ADD_CATEGORY
} from 'constants'

const task = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        id: action.id,
        text: action.text,
        checked: false,
        categories: []
      }

    case CHECKED_TASK:
      return {...state, checked: !state.checked}

    case DELETE_CATEGORY:
      let newCategories = state.categories.slice()
      const numberDeleteCategory = newCategories.indexOf(action.category)
      if (~numberDeleteCategory) {
        newCategories.splice(numberDeleteCategory, 1)
      }
      return {...state, categories: newCategories}

    case ADD_CATEGORY:
      return {...state, categoies: state.categories.concat([action.category])}
    default:
      return state
  }
}

const tasks = (state = [{id: 1, text: 'залупа', checked: false, categories: []}], action) => {
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
         return !(itemTaskList.id === action.id)
      })

    case DELETE_CATEGORY:
      return state.map((itemTaskList) => {
        return task( itemTaskList, action)
      })

    case ADD_CATEGORY:
      return state.map( (itemTaskList) => {
        if ( itemTaskList.id === action.id ) {
          return task( itemTaskList, action)
        }
        return itemTaskList
      })

    default:
      return state
  }
}

export default tasks
