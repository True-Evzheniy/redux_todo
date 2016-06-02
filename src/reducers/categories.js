import {ADD_CATEGORY, DELETE_CATEGORY} from 'constants'

export const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return state.concat([action.category])

    case DELETE_CATEGORY:
      let newState = state.slice()
      const numberDeleteCategory = newState.indexOf(action.category)
      newState.splice(numberDeleteCategory, 1)
      return newState
    default:
      return state
  }
}
