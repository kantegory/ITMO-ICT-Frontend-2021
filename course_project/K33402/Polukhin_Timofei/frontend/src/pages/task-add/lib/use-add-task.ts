import { useCallback } from 'react'
import { generatePath, useHistory } from 'react-router-dom'

import { createTask } from 'entities/tasks/api'
import { PRIVATE_PATH } from 'shared/config'

export const useAddTask = (subjectId: number) => {
  const history = useHistory()

  const handleAddTask = useCallback(
    async (values: Components.Schemas.TaskRequest) => {
      values.subject = subjectId
      const { data } = await createTask(values)
      history.push(generatePath(PRIVATE_PATH.TASK, { taskId: data.id }))
    },
    [subjectId, history],
  )

  return { handleAddTask }
}
