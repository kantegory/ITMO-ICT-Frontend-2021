import { useCallback } from 'react'
import { mutate } from 'swr'

import { editMembership } from 'entities/groups/api'
import { routes } from 'shared/api'

export const useEditMembership = (
  groupId: string,
  membershipId: number | null,
  onClose: () => void,
) => {
  const handleEditMembership = useCallback(
    async (values: Components.Schemas.PatchedGroupMembershipRequest) => {
      if (!membershipId) {
        return
      }
      const { data } = await editMembership(groupId, membershipId, values)
      await mutate(routes.groupMembership(groupId, membershipId), data)
      onClose()
    },
    [groupId, membershipId, onClose],
  )

  return { handleEditMembership }
}
