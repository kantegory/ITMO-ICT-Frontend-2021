import { List, Typography } from 'antd'
import { Dispatch } from 'react'
import {useParams} from "react-router-dom";

import {useMemberships} from "entities/groups/api";
import { Grid } from 'shared/ui'

import styles from './students-list.module.scss'

interface Props {
  onUserClick?: Dispatch<number>
}

export const StudentsList = ({ onUserClick }: Props) => {
  let { groupId } = useParams<{ groupId: string }>()
  const { memberships } = useMemberships(groupId)
  
  return (
    <Grid>
      <Typography.Title level={3}>Студенты</Typography.Title>
      <List
        dataSource={memberships}
        renderItem={(item) => (
          <List.Item
            extra={
              item.role === `ADMIN` && 
              <Typography.Text type='warning'>Админ</Typography.Text>
            }
            onClick={() => onUserClick && onUserClick(item.id)}
          >
            <Typography.Text className={styles.name}>
              {item.user.firstName} {item.user.lastName.charAt(0)}.
            </Typography.Text>
          </List.Item>
        )}
      />
    </Grid>
  )
}
