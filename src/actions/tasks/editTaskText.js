import {EDIT_TASK_TEXT} from 'constants'

export const editTaskText = (id, text) => ({
  type: EDIT_TASK_TEXT,
  id,
  text
})
