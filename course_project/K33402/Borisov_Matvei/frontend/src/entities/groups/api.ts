import useSWR from 'swr'

import { api, routes } from 'shared/api'

type Id = number | string

export const useGroups = () => {
  const { data: groups } = useSWR<Components.Schemas.Group[]>(routes.groups)
  return { groups }
}

export const useGroup = (id: Id) => {
  const { data: group } = useSWR<Components.Schemas.Group>(routes.group(id))
  return { group }
}

export const createGroup = (values: Components.Schemas.GroupRequest) =>
  api.post<Components.Schemas.Group>(routes.groups, values)

export const updateGroup = (id: Id, values: Components.Schemas.GroupRequest) =>
  api.patch<Components.Schemas.Group>(routes.group(id), values)

export const joinGroup = (values: Components.Schemas.JoinGroupRequest) =>
  api.post<Components.Schemas.JoinGroup>(routes.groupsJoin, values)

export const useMemberships = (groupId: Id) => {
  const { data: memberships } = useSWR<Components.Schemas.GroupMembership[]>(
    routes.groupMemberships(groupId),
  )
  return { memberships }
}
export const useMembership = (groupId: Id, membershipId: Id | null) => {
  const { data: membership } = useSWR<Components.Schemas.GroupMembership>(
    membershipId ? routes.groupMembership(groupId, membershipId) : null,
  )
  return { membership }
}

export const editMembership = (
  groupId: Id,
  membershipId: Id,
  values: Components.Schemas.PatchedGroupMembershipRequest,
) =>
  api.patch<Components.Schemas.GroupMembership>(
    routes.groupMembership(groupId, membershipId),
    values,
  )

export const deleteMembership = (groupId: Id, membershipId: Id) =>
  api.delete(routes.groupMembership(groupId, membershipId))
