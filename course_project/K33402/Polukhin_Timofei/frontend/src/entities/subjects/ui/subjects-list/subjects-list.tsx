import { Typography } from 'antd'
import { generatePath } from 'react-router-dom'

import { PRIVATE_PATH } from 'shared/config'
import { Grid, LinkCard } from 'shared/ui'

interface Props {
  subjects: Components.Schemas.FlatSubject[] | undefined
}

export const SubjectsList = ({ subjects }: Props) => {
  return (
    <Grid>
      {subjects?.map((subject) => (
        <LinkCard
          key={subject.id}
          href={generatePath(PRIVATE_PATH.SUBJECT, { subjectId: subject.id })}
        >
          <Typography.Title level={4}>{subject.name}</Typography.Title>
        </LinkCard>
      ))}
    </Grid>
  )
}
