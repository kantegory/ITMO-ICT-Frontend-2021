import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { mutate } from 'swr'

import { deleteSubject } from 'entities/subjects/api'
import { routes } from 'shared/api'
import { PRIVATE_PATH } from 'shared/config'

export const useDeleteSubject = (subjectId: number | string) => {
  const history = useHistory()

  const handleDeleteSubject = useCallback(
    async () => {
      await deleteSubject(subjectId)
      await mutate(routes.subjects)
      history.push(PRIVATE_PATH.SUBJECTS)
    },
    [history, subjectId],
  )

  return { handleDeleteSubject }
}
