import { notification } from 'antd'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { mutate } from 'swr'

import { deleteTask } from 'entities/tasks/api'
import { routes } from 'shared/api'
import { PRIVATE_PATH } from 'shared/config'

export const useDeleteTask = (taskId: number | string) => {
  const history = useHistory()

  const handleDeleteTask = useCallback(async () => {
    await deleteTask(taskId)
    notification.warning({ message: `Задача удалена` })
    history.push(PRIVATE_PATH.TASKS)
    await mutate(routes.tasks)
  }, [history, taskId])

  return { handleDeleteTask }
}
