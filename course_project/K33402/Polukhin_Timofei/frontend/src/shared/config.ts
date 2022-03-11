export enum PUBLIC_PATH {
  LOGIN = `/login`,
  SIGNUP = `/signup`,
  RESTORE = `/restore`,
  RESTORE_CONFIRM = `/restore/confirm/:uid/:token`,
  RESULT = `/result`,
  ACTIVATE = `/activate/:uid/:token`
}

export enum PRIVATE_PATH {
  SETTINGS = `/settings`,

  GROUPS = `/groups`,
  GROUP_ADD = `/groups/add`,
  GROUP = `/groups/:groupId`,
  GROUP_EDIT = `/groups/:groupId/edit`,

  JOIN_GROUP = `/groups/join/:uuid`,

  SUBJECTS = `/subjects`,
  SUBJECT = `/subjects/:subjectId`,
  SUBJECT_ADD = `/groups/:groupId/subjects/add`,

  TASKS = `/tasks`,
  TASK = `/tasks/:taskId`,
  TASK_ADD = `/subjects/:subjectId/tasks/add`
}
