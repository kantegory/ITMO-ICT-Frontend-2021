type Id = string | number

export const routes = {
  token: `/token`,
  tokenRefresh: `/token/refresh`,

  groups: `/groups`,
  group: (id: Id) => `${routes.groups}/${id}`,
  groupsJoin: `/groups/join`,

  groupMemberships: (groupId: Id) => `${routes.group(groupId)}/memberships`,
  groupMembership: (groupId: Id, membershipId: Id) =>
    `${routes.groupMemberships(groupId)}/${membershipId}`,

  subjects: `/subjects`,
  subject: (id: Id) => `${routes.subjects}/${id}`,

  tasks: `/tasks`,
  task: (id: Id) => `${routes.tasks}/${id}`,

  users: `/users/`,
  me: `/users/me/`,
  usersActivation: `/users/activation/`,
  usersSetPassword: `/users/set_password/`,
  usersResetPassword: `/users/reset_password/`,
  usersResetPasswordConfirm: `/users/reset_password_confirm/`,

  files: `/files`,
}
