import { EditOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { useMemo } from 'react'
import { generatePath, useParams, Link } from 'react-router-dom'

import { useGroup, useMemberships } from 'entities/groups/api'
import { StudentsList } from 'entities/groups/ui'
import { SubjectsList } from 'entities/subjects/ui'
import { useMyself } from 'entities/users/api'
import { ShareOrCopy } from 'features/share-or-copy/ui'
import { useLeaveGroup } from 'pages/group/lib/use-leave-group'
import { PRIVATE_PATH } from 'shared/config'
import { Grid } from 'shared/ui'
import { PrivateLayout } from 'widgets/private-layout'

import styles from './group.module.scss'

export const Group = () => {
  let { groupId } = useParams<{ groupId: string }>()
  const { group } = useGroup(groupId)
  const { myself } = useMyself()
  const { memberships } = useMemberships(groupId)

  const myMembership = useMemo(
    () => memberships?.find((membership) => membership.user.id === myself?.id),
    [memberships, myself?.id],
  )

  const { handleLeaveGroup } = useLeaveGroup(groupId, myMembership?.id)

  return (
    <Grid>
      <div className={styles.header}>
        <Typography.Title level={2}>{group?.number}</Typography.Title>
        <ShareOrCopy
          title={`Вступить в группу ${group?.number}`}
          url={
            group &&
            `${origin}${generatePath(PRIVATE_PATH.JOIN_GROUP, {
              uuid: group?.uuid,
            })}`
          }
        />
        {myMembership?.role !== `MEMBER` && (
          <Link to={generatePath(PRIVATE_PATH.GROUP_EDIT, { groupId })}>
            <Button icon={<EditOutlined />} size='middle' type='primary' />
          </Link>
        )}
      </div>
      <Typography.Title level={3}>Предметы</Typography.Title>
      <SubjectsList subjects={group?.subjects} />
      {myMembership?.role !== `MEMBER` && (
        <Link to={generatePath(PRIVATE_PATH.SUBJECT_ADD, { groupId })}>
          <Button block>Добавить предмет</Button>
        </Link>
      )}
      <Button block danger onClick={handleLeaveGroup}>
        Выйти из группы
      </Button>

      <PrivateLayout.Aside>
        <StudentsList />
      </PrivateLayout.Aside>
    </Grid>
  )
}
