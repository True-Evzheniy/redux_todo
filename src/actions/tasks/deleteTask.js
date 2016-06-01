import {DELETE_TASK} from 'constants'

export const deleteTask = id => ({
  type: DELETE_TASK,
  id: id
})
