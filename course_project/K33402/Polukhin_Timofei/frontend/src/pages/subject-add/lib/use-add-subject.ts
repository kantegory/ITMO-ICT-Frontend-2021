import { useCallback } from 'react'
import { generatePath, useHistory } from 'react-router-dom'

import { createSubject } from 'entities/subjects/api'
import { PRIVATE_PATH } from 'shared/config'

export const useAddSubject = (groupId: number) => {
  const history = useHistory()

  const handleAddSubject = useCallback(
    async (values: Components.Schemas.SubjectRequest) => {
      values.group = groupId
      const { data } = await createSubject(values)
      history.push(generatePath(PRIVATE_PATH.SUBJECT, { subjectId: data.id }))
    },
    [groupId, history],
  )

  return { handleAddSubject }
}
