import {ADD_CATEGORY, DELETE_CATEGORY, CHECKED_CATEGORY} from 'constants'

export const categories = (state = [], action) => {
  switch (action.type) {

    case ADD_CATEGORY:
      let isExistCategory;
      state.forEach((item) => {
        if(item.text === action.category) {
          isExistCategory = true;
        }
      })
      if(!isExistCategory) {
        return state.concat([{
          text: action.category,
          id: action.idCategory,
          checked: false
        }])
      }
      return state

    case DELETE_CATEGORY:
      return state.filter((item) => {
        return !(item.id === action.id)
      })

    case CHECKED_CATEGORY:
      return state.map((item) => {
        if(item.id === action.id) {
          return {...item, checked: !item.checked}
        }
        return {...item}
      })

    default:
      return state
  }
}
