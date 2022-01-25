import { PRIVATE_PATH } from 'shared/config'

export const pages: { link: string; title: string }[] = [
  { title: `Мои задания`, link: PRIVATE_PATH.TASKS },
  { title: `Предметы`, link: PRIVATE_PATH.SUBJECTS },
  { title: `Группы`, link: PRIVATE_PATH.GROUPS },
  { title: `Настройки`, link: PRIVATE_PATH.SETTINGS },
]
