import { useCallback } from 'react'
import { mutate } from 'swr'

import { editTask } from 'entities/tasks/api'
import { routes } from 'shared/api'

export const useEditTask = (taskId: string) => {
  const handleEditTask = useCallback(
    async (values: Components.Schemas.PatchedTaskRequest) => {
      const { data } = await editTask(taskId, values)
      await mutate(routes.task(taskId), data)
    },
    [taskId],
  )

  return { handleEditTask }
}
