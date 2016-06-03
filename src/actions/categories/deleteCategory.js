import { DELETE_CATEGORY } from 'constants'

export const deleteCategory = (textCategory, idCategory) => ({
  type: DELETE_CATEGORY,
  text: textCategory,
  id: idCategory
})
