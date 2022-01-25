import { useEffect, useState } from 'react'
import { generatePath, useHistory, useParams } from 'react-router-dom'

import { joinGroup } from 'entities/groups/api'
import { PRIVATE_PATH } from 'shared/config'

export const useJoinGroup = () => {
  const history = useHistory()
  const { uuid } = useParams<{ uuid: string }>()
  const [status, setStatus] = useState<`success` | `error`>()

  useEffect(() => {
    joinGroup({ uuid })
      .then(({ data }) =>
        history.push(generatePath(PRIVATE_PATH.GROUP, { groupId: data.group })),
      )
      .catch(() => setStatus(`error`))
  }, [history, uuid])

  return { status }
}
