import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { useGroup, useMemberships } from 'entities/groups/api'
import { useMyself } from 'entities/users/api'
import { useEditGroup } from 'pages/group-edit/lib'
import { GroupEditForm } from 'widgets/groups/ui'

export const GroupEdit = () => {
  let { groupId } = useParams<{ groupId: string }>()
  const { group } = useGroup(groupId)
  const { handleEditGroup } = useEditGroup(groupId)
  const { myself } = useMyself()
  const { memberships } = useMemberships(groupId)

  const isAdmin = useMemo(
    () =>
      memberships?.find((membership) => membership.user.id === myself?.id)
        ?.role === `ADMIN`,
    [memberships, myself?.id],
  )

  return (
    <GroupEditForm
      isAdmin={isAdmin}
      values={group}
      onSubmit={handleEditGroup}
    />
  )
}
