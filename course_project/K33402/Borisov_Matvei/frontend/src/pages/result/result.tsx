import { Result as AntResult, Button } from 'antd'
import { Link } from 'react-router-dom'

import { PUBLIC_PATH } from 'shared/config'
import { ResultData, useQuery } from 'shared/lib'

export const Result = () => {
  const query = useQuery()

  return (
    <>
      <AntResult
        extra={
          <Link to={PUBLIC_PATH.LOGIN}>
            <Button>На главную</Button>
          </Link>
        }
        status={query.get(`status`) as ResultData[`status`]}
        subTitle={query.get(`text`)}
        title={query.get(`title`)}
      />
    </>
  )
}
