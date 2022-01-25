import {useParams} from "react-router-dom";

import {useAddTask} from "pages/task-add/lib/use-add-task";
import {TaskForm} from "widgets/tasks/ui";

export const TaskAdd = () => {
  const { subjectId } = useParams<{ subjectId: string }>()
  const { handleAddTask } = useAddTask(Number(subjectId))
  return <TaskForm isEditing isNew onSubmit={handleAddTask}/>
}