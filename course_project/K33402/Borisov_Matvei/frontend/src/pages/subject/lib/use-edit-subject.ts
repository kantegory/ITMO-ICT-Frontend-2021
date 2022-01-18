import { useCallback } from 'react'
import { mutate } from 'swr'

import { editSubject } from 'entities/subjects/api'
import { routes } from 'shared/api'

export const useEditSubject = (subjectId: number | string) => {
  const handleEditSubject = useCallback(
    async (values: Components.Schemas.PatchedSubjectRequest) => {
      const { data } = await editSubject(subjectId, values)
      await mutate(routes.subject(subjectId), data)
    },
    [subjectId],
  )

  return { handleEditSubject }
}
