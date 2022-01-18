import { useAddGroup } from 'pages/group-add/lib/use-add-group'
import { GroupEditForm } from 'widgets/groups/ui'

export const GroupAdd = () => {
  const { handleAddGroup } = useAddGroup()
  return <GroupEditForm onSubmit={handleAddGroup} />
}
