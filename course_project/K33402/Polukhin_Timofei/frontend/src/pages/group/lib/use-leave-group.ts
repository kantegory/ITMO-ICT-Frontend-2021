import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { mutate } from 'swr'

import { deleteMembership } from 'entities/groups/api'
import { routes } from 'shared/api'
import { PRIVATE_PATH } from 'shared/config'

export const useLeaveGroup = (groupId: string, membershipId?: number | null) => {
  const history = useHistory()

  const handleLeaveGroup = useCallback(async () => {
    if (!membershipId) {
      return
    }
    await deleteMembership(groupId, membershipId)
    await mutate(routes.groups)
    history.push(PRIVATE_PATH.GROUPS)
  }, [groupId, history, membershipId])

  return { handleLeaveGroup }
}
