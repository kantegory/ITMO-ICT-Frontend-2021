import { Button, Result, Spin } from 'antd'
import { Link } from 'react-router-dom'

import { PRIVATE_PATH } from 'shared/config'

import styles from './join-group.module.scss'
import { useJoinGroup } from './lib/use-join-group'


export const JoinGroup = () => {
  const { status } = useJoinGroup()

  return status === `error` ? (
    <Result
      extra={
        <Link to={PRIVATE_PATH.TASKS}>
          <Button type='link'>На главную</Button>
        </Link>
      }
      status={status}
      title={`Ошибка при попытке вступить в группу`}
    />
  ) : (
    <Spin className={styles.spinner} />
  )
}
