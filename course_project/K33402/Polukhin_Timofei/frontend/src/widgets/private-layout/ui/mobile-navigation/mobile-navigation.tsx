import { Drawer, Typography } from 'antd'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { useMyself } from 'entities/users/api'

import styles from './mobile-navigation.module.scss'

import { pages } from '../../lib/pages'
import { useLogout } from '../../lib/use-logout'

interface Props {
  onClose: () => void
  visible: boolean
  className?: string
}

export const MobileNavigation = ({ onClose, visible, className }: Props) => {
  const { handleLogout } = useLogout()
  const { myself } = useMyself()

  return (
    <Drawer
      className={classNames(styles.drawer, className)}
      placement='left'
      title={`${myself?.firstName} ${myself?.lastName}`}
      visible={visible}
      width='100%'
      onClose={onClose}
    >
      {pages.map(({ title, link }) => (
        <Link key={link} to={link} onClick={onClose}>
          <Typography.Title level={2}>{title}</Typography.Title>
        </Link>
      ))}
      <Typography.Title
        className={styles.logout}
        level={3}
        type='danger'
        onClick={handleLogout}
      >
        Выход
      </Typography.Title>
    </Drawer>
  )
}
