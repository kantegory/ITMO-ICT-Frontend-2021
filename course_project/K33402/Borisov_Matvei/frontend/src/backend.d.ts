declare namespace Components {
  namespace Schemas {
    export interface Activation {
      uid: string
      token: string
    }
    export interface ActivationRequest {
      uid: string
      token: string
    }
    export interface File {
      id: number
      file: string // uri
    }
    export interface FileRequest {
      file: string // binary
    }
    export interface FlatSubject {
      id: number
      name: string
      description?: string | null
      image?: null | number
    }
    export interface FlatSubjectRequest {
      name: string
      description?: string | null
      image?: null | number
    }
    export interface Group {
      id: number
      subjects: FlatSubject[]
      number: string
      uuid: string // uuid
    }
    export interface GroupMembership {
      id: number
      user: User
      role: RoleEnum
    }
    export interface GroupMembershipRequest {
      group: number
      user: UserRequest
      role: RoleEnum
    }
    export interface GroupRequest {
      number: string
    }
    export interface JoinGroup {
      group: number
      role: `ADMIN` | `EDITOR` | `MEMBER`
    }
    export interface JoinGroupRequest {
      uuid: string // uuid
    }
    export interface PasswordResetConfirmRetype {
      uid: string
      token: string
      newPassword: string
      reNewPassword: string
    }
    export interface PasswordResetConfirmRetypeRequest {
      uid: string
      token: string
      newPassword: string
      reNewPassword: string
    }
    export interface PatchedGroupMembershipRequest {
      group?: number
      user?: UserRequest
      role?: RoleEnum
    }
    export interface PatchedGroupRequest {
      number?: string
    }
    export interface PatchedSubjectRequest {
      name?: string
      description?: string | null
      group?: number
      image?: null | number
    }
    export interface PatchedTaskRequest {
      name?: string
      description?: string
      deadline?: string | null // date-time
      subject?: number
      attachments?: number[]
    }
    export interface PatchedUserRequest {
      firstName?: string
      lastName?: string
      /**
       * Пароль
       */
      password?: string
    }
    export type RoleEnum = `ADMIN` | `EDITOR` | `MEMBER`
    export interface SendEmailReset {
      email: string // email
    }
    export interface SendEmailResetRequest {
      email: string // email
    }
    export interface SetPasswordRetype {
      newPassword: string
      reNewPassword: string
      currentPassword: string
    }
    export interface SetPasswordRetypeRequest {
      newPassword: string
      reNewPassword: string
      currentPassword: string
    }
    export interface SetUsername {
      currentPassword: string
      /**
       * Email
       */
      newEmail: string // email
    }
    export interface SetUsernameRequest {
      currentPassword: string
      /**
       * Email
       */
      newEmail: string // email
    }
    export interface Subject {
      id: number
      tasks: Task[]
      name: string
      description?: string | null
      group: number
      image?: null | number
    }
    export interface SubjectRequest {
      name: string
      description?: string | null
      group: number
      image?: null | number
    }
    export interface Task {
      id: number
      name: string
      description: string
      deadline?: string | null // date-time
      subject: number
      attachments?: number[]
    }
    export interface TaskListRetrieve {
      id: number
      attachments: File[] | null
      name: string
      description: string
      deadline?: string | null // date-time
      subject: number
    }
    export interface TaskRequest {
      name: string
      description: string
      deadline?: string | null // date-time
      subject: number
      attachments?: number[]
    }
    export interface TokenObtainPair {
      access: string
      refresh: string
    }
    export interface TokenObtainPairRequest {
      email: string
      password: string
    }
    export interface TokenRefresh {
      access: string
      refresh: string
    }
    export interface TokenRefreshRequest {
      refresh: string
    }
    export interface User {
      firstName: string
      lastName: string
      id: number
      email: string // email
    }
    export interface UserCreatePasswordRetype {
      firstName: string
      lastName: string
      email: string // email
      id: number
      rePassword: string
    }
    export interface UserCreatePasswordRetypeRequest {
      firstName: string
      lastName: string
      password: string
      email: string // email
      rePassword: string
    }
    export interface UserRequest {
      firstName: string
      lastName: string
      /**
       * Пароль
       */
      password: string
    }
    export interface UsernameResetConfirm {
      /**
       * Email
       */
      newEmail: string // email
    }
    export interface UsernameResetConfirmRequest {
      /**
       * Email
       */
      newEmail: string // email
    }
  }
}
declare namespace Paths {
  namespace FilesCreate {
    export type RequestBody = Components.Schemas.FileRequest
    namespace Responses {
      export type $201 = Components.Schemas.File
    }
  }
  namespace FilesRetrieve {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.File
    }
  }
  namespace GroupsCreate {
    export type RequestBody = Components.Schemas.GroupRequest
    namespace Responses {
      export type $201 = Components.Schemas.Group
    }
  }
  namespace GroupsJoinCreate {
    export type RequestBody = Components.Schemas.JoinGroupRequest
    namespace Responses {
      export type $201 = Components.Schemas.JoinGroup
    }
  }
  namespace GroupsList {
    namespace Responses {
      export type $200 = Components.Schemas.Group[]
    }
  }
  namespace GroupsMembershipsDestroy {
    namespace Parameters {
      export type GroupPk = number
      export type Id = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
      id: Parameters.Id
    }
    namespace Responses {
      export interface $204 {}
    }
  }
  namespace GroupsMembershipsList {
    namespace Parameters {
      export type GroupPk = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
    }
    namespace Responses {
      export type $200 = Components.Schemas.GroupMembership[]
    }
  }
  namespace GroupsMembershipsPartialUpdate {
    namespace Parameters {
      export type GroupPk = number
      export type Id = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.PatchedGroupMembershipRequest
    namespace Responses {
      export type $200 = Components.Schemas.GroupMembership
    }
  }
  namespace GroupsMembershipsRetrieve {
    namespace Parameters {
      export type GroupPk = number
      export type Id = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.GroupMembership
    }
  }
  namespace GroupsMembershipsUpdate {
    namespace Parameters {
      export type GroupPk = number
      export type Id = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.GroupMembershipRequest
    namespace Responses {
      export type $200 = Components.Schemas.GroupMembership
    }
  }
  namespace GroupsPartialUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.PatchedGroupRequest
    namespace Responses {
      export type $200 = Components.Schemas.Group
    }
  }
  namespace GroupsRetrieve {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.Group
    }
  }
  namespace GroupsUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.GroupRequest
    namespace Responses {
      export type $200 = Components.Schemas.Group
    }
  }
  namespace SubjectsCreate {
    export type RequestBody = Components.Schemas.SubjectRequest
    namespace Responses {
      export type $201 = Components.Schemas.Subject
    }
  }
  namespace SubjectsDestroy {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export interface $204 {}
    }
  }
  namespace SubjectsList {
    namespace Responses {
      export type $200 = Components.Schemas.Subject[]
    }
  }
  namespace SubjectsPartialUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.PatchedSubjectRequest
    namespace Responses {
      export type $200 = Components.Schemas.Subject
    }
  }
  namespace SubjectsRetrieve {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.Subject
    }
  }
  namespace SubjectsUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.SubjectRequest
    namespace Responses {
      export type $200 = Components.Schemas.Subject
    }
  }
  namespace TasksCreate {
    export type RequestBody = Components.Schemas.TaskRequest
    namespace Responses {
      export type $201 = Components.Schemas.Task
    }
  }
  namespace TasksDestroy {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export interface $204 {}
    }
  }
  namespace TasksList {
    namespace Responses {
      export type $200 = Components.Schemas.TaskListRetrieve[]
    }
  }
  namespace TasksPartialUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.PatchedTaskRequest
    namespace Responses {
      export type $200 = Components.Schemas.Task
    }
  }
  namespace TasksRetrieve {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.TaskListRetrieve
    }
  }
  namespace TasksUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.TaskRequest
    namespace Responses {
      export type $200 = Components.Schemas.Task
    }
  }
  namespace TokenCreate {
    export type RequestBody = Components.Schemas.TokenObtainPairRequest
    namespace Responses {
      export type $200 = Components.Schemas.TokenObtainPair
    }
  }
  namespace TokenRefreshCreate {
    export type RequestBody = Components.Schemas.TokenRefreshRequest
    namespace Responses {
      export type $200 = Components.Schemas.TokenRefresh
    }
  }
  namespace UsersActivationCreate {
    export type RequestBody = Components.Schemas.ActivationRequest
    namespace Responses {
      export type $200 = Components.Schemas.Activation
    }
  }
  namespace UsersCreate {
    export type RequestBody = Components.Schemas.UserCreatePasswordRetypeRequest
    namespace Responses {
      export type $201 = Components.Schemas.UserCreatePasswordRetype
    }
  }
  namespace UsersDestroy {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export interface $204 {}
    }
  }
  namespace UsersList {
    namespace Responses {
      export type $200 = Components.Schemas.User[]
    }
  }
  namespace UsersMeDestroy {
    namespace Responses {
      export interface $204 {}
    }
  }
  namespace UsersMePartialUpdate {
    export type RequestBody = Components.Schemas.PatchedUserRequest
    namespace Responses {
      export type $200 = Components.Schemas.User
    }
  }
  namespace UsersMeRetrieve {
    namespace Responses {
      export type $200 = Components.Schemas.User
    }
  }
  namespace UsersMeUpdate {
    export type RequestBody = Components.Schemas.UserRequest
    namespace Responses {
      export type $200 = Components.Schemas.User
    }
  }
  namespace UsersPartialUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.PatchedUserRequest
    namespace Responses {
      export type $200 = Components.Schemas.User
    }
  }
  namespace UsersResendActivationCreate {
    export type RequestBody = Components.Schemas.SendEmailResetRequest
    namespace Responses {
      export type $200 = Components.Schemas.SendEmailReset
    }
  }
  namespace UsersResetEmailConfirmCreate {
    export type RequestBody = Components.Schemas.UsernameResetConfirmRequest
    namespace Responses {
      export type $200 = Components.Schemas.UsernameResetConfirm
    }
  }
  namespace UsersResetEmailCreate {
    export type RequestBody = Components.Schemas.SendEmailResetRequest
    namespace Responses {
      export type $200 = Components.Schemas.SendEmailReset
    }
  }
  namespace UsersResetPasswordConfirmCreate {
    export type RequestBody =
      Components.Schemas.PasswordResetConfirmRetypeRequest
    namespace Responses {
      export type $200 = Components.Schemas.PasswordResetConfirmRetype
    }
  }
  namespace UsersResetPasswordCreate {
    export type RequestBody = Components.Schemas.SendEmailResetRequest
    namespace Responses {
      export type $200 = Components.Schemas.SendEmailReset
    }
  }
  namespace UsersRetrieve {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.User
    }
  }
  namespace UsersSetEmailCreate {
    export type RequestBody = Components.Schemas.SetUsernameRequest
    namespace Responses {
      export type $200 = Components.Schemas.SetUsername
    }
  }
  namespace UsersSetPasswordCreate {
    export type RequestBody = Components.Schemas.SetPasswordRetypeRequest
    namespace Responses {
      export type $200 = Components.Schemas.SetPasswordRetype
    }
  }
  namespace UsersUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.UserRequest
    namespace Responses {
      export type $200 = Components.Schemas.User
    }
  }
}
