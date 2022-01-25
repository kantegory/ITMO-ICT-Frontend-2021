import { Routes } from 'features/routing/routing'
import * as pages from 'pages'
import { PRIVATE_PATH, PUBLIC_PATH } from 'shared/config'

export const privateRoutes: Routes = [
  { path: PRIVATE_PATH.SETTINGS, component: pages.Settings },
  { path: PRIVATE_PATH.GROUPS, component: pages.Groups },
  { path: PRIVATE_PATH.GROUP_ADD, component: pages.GroupAdd },
  { path: PRIVATE_PATH.GROUP, component: pages.Group },
  { path: PRIVATE_PATH.GROUP_EDIT, component: pages.GroupEdit },
  { path: PRIVATE_PATH.SUBJECTS, component: pages.Subjects },
  { path: PRIVATE_PATH.SUBJECT, component: pages.Subject },
  { path: PRIVATE_PATH.SUBJECT_ADD, component: pages.SubjectAdd },
  { path: PRIVATE_PATH.TASKS, component: pages.Tasks, default: true },
  { path: PRIVATE_PATH.TASK, component: pages.Task },
  { path: PRIVATE_PATH.TASK_ADD, component: pages.TaskAdd },
  { path: PRIVATE_PATH.JOIN_GROUP, component: pages.JoinGroup },
]

export const publicRoutes: Routes = [
  { path: PUBLIC_PATH.LOGIN, component: pages.Login, default: true },
  { path: PUBLIC_PATH.SIGNUP, component: pages.Signup },
  { path: PUBLIC_PATH.RESTORE, component: pages.Restore },
  { path: PUBLIC_PATH.RESULT, component: pages.Result },
  { path: PUBLIC_PATH.ACTIVATE, component: pages.Activate },
  { path: PUBLIC_PATH.RESTORE_CONFIRM, component: pages.RestoreConfirm },
]
