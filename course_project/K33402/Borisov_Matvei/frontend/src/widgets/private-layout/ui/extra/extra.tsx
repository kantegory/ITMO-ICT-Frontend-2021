import { Typography, Popover, Button } from 'antd'
import { useMemo } from 'react'

import { useMyself } from 'entities/users/api'

import styles from './extra.module.scss'

import { useLogout } from '../../lib/use-logout'

export const Extra = () => {
  const { myself } = useMyself()
  const { handleLogout } = useLogout()

  const menu = useMemo(
    () => (
      <Button danger onClick={handleLogout}>
        Выйти
      </Button>
    ),
    [handleLogout],
  )

  return (
    <>
      <Popover content={menu} placement='bottom' trigger='click'>
        <Typography.Title className={styles.title} level={5}>
          {myself?.firstName} {myself?.lastName}
        </Typography.Title>
      </Popover>
    </>
  )
}
