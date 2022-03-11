import useSWR from 'swr'

import { api, routes } from 'shared/api'

export const useSubjects = () => {
  const { data: subjects } = useSWR<Components.Schemas.Subject[]>(
    routes.subjects,
  )
  return { subjects }
}

export const useSubject = (id: number | string) => {
  const { data: subject } = useSWR<Components.Schemas.Subject>(
    routes.subject(id),
  )
  return { subject }
}

export const createSubject = (values: Components.Schemas.SubjectRequest) =>
  api.post<Components.Schemas.Subject>(routes.subjects, values)

export const editSubject = (
  id: number | string,
  values: Components.Schemas.PatchedSubjectRequest,
) => api.patch<Components.Schemas.Subject>(routes.subject(id), values)

export const deleteSubject = (id: number | string) =>
  api.patch<void>(routes.subject(id))
