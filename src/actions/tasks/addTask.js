import {ADD_TASK} from 'constants'

export const addTask = text => ({
  type: ADD_TASK,
  id: Date.now(),
  text: text
})
