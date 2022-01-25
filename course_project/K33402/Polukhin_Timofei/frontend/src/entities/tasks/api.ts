import { AxiosRequestConfig } from 'axios'
import useSWR from 'swr'

import { api, routes } from 'shared/api'

type TasksList = Components.Schemas.Task[]
export const useTasks = (params?: unknown) => {
  const { data: tasks } = useSWR<TasksList>([
    routes.tasks,
    { params } as AxiosRequestConfig<TasksList>,
  ])
  return { tasks: tasks }
}

export const useTask = (id: number | string) => {
  const { data: task } = useSWR<Components.Schemas.TaskListRetrieve>(
    routes.task(id),
  )
  return { task }
}

export const deleteTask = (id: number | string) =>
  api.delete<void>(routes.task(id))

export const editTask = (
  id: string,
  values: Components.Schemas.PatchedTaskRequest,
) => api.patch<Components.Schemas.Task>(routes.task(id), values)

export const createTask = (values: Components.Schemas.TaskRequest) =>
  api.post<Components.Schemas.Task>(routes.tasks, values)
