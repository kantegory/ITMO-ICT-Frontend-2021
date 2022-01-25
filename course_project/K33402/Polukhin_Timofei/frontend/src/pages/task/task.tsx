import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useTask } from 'entities/tasks/api'
import { useDeleteTask } from 'pages/task/lib'
import { useEditTask } from 'pages/task/lib/use-edit-task'
import { TaskForm } from 'widgets/tasks/ui'

export const Task = () => {
  let { taskId } = useParams<{ taskId: string }>()
  const { task } = useTask(taskId)
  const { handleEditTask } = useEditTask(taskId)
  const { handleDeleteTask } = useDeleteTask(taskId)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <TaskForm
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      values={task}
      onDelete={handleDeleteTask}
      onSubmit={handleEditTask}
    />
  )
}
