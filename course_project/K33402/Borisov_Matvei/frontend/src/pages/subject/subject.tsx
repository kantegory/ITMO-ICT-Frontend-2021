import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useSubject } from 'entities/subjects/api'
import { Grid } from 'shared/ui'
import { SubjectForm } from 'widgets/subjects/ui'

import { useDeleteSubject } from './lib/use-delete-subject'
import { useEditSubject } from './lib/use-edit-subject'

export const Subject = () => {
  let { subjectId } = useParams<{ subjectId: string }>()
  const { subject } = useSubject(subjectId)
  const { handleEditSubject } = useEditSubject(subjectId)
  const { handleDeleteSubject } = useDeleteSubject(subjectId)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Grid>
      <SubjectForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        values={subject}
        onDelete={handleDeleteSubject}
        onSubmit={handleEditSubject}
      />
    </Grid>
  )
}
