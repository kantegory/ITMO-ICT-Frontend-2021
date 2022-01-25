import { Typography } from 'antd'

import { useSubjects } from 'entities/subjects/api'
import { SubjectsList } from 'entities/subjects/ui'
import { Grid } from 'shared/ui'

export const Subjects = () => {
  const { subjects } = useSubjects()

  return (
    <Grid>
      <Typography.Title level={2}>Предметы</Typography.Title>
      <SubjectsList subjects={subjects} />
    </Grid>
  )
}
