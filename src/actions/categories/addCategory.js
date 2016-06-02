import {ADD_CATEGORY} from 'constants'

export const addCategory = (textCategory, idTask) => ({
  type: ADD_CATEGORY,
  id: idTask,
  category: textCategory
})
