import {CHECKED_TASK} from 'constants'

export const checkedTask = id => ({
  type: CHECKED_TASK,
  id: id
})
