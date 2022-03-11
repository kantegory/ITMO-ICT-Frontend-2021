import { useParams } from 'react-router-dom'

import { useAddSubject } from 'pages/subject-add/lib/use-add-subject'
import { SubjectForm } from 'widgets/subjects/ui'

export const SubjectAdd = () => {
  const { groupId } = useParams<{ groupId: string }>()
  const { handleAddSubject } = useAddSubject(Number(groupId))
  return <SubjectForm isEditing isNew onSubmit={handleAddSubject} />
}
