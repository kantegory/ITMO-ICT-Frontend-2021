import { notification } from 'antd'
import { useCallback } from 'react'
import { generatePath, useHistory } from 'react-router-dom'
import { mutate } from 'swr'

import { updateGroup } from 'entities/groups/api'
import { routes } from 'shared/api'
import { PRIVATE_PATH } from 'shared/config'

export const useEditGroup = (groupId: number | string) => {
  const history = useHistory()

  const handleEditGroup = useCallback(
    async (values: Components.Schemas.GroupRequest) => {
      const { data } = await updateGroup(groupId, values)
      notification.success({ message: `Данные группы обновлены` })
      await mutate(routes.group(groupId), data)
      history.push(generatePath(PRIVATE_PATH.GROUP, { groupId }))
    },
    [groupId, history],
  )

  return { handleEditGroup }
}
