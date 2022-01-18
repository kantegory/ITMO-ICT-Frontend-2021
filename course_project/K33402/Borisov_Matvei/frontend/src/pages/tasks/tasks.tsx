import { Typography } from 'antd'
import { useState } from 'react'

import { useTasks } from 'entities/tasks/api'
import { TasksList } from 'entities/tasks/ui'
import { Grid } from 'shared/ui'

import { Filters, FiltersInterface } from './ui/filters/filters'

export const Tasks = () => {
  const [filters, setFilters] = useState<FiltersInterface>({
    ordering: `deadline`,
  })
  const { tasks } = useTasks(filters)

  return (
    <Grid>
      <Typography.Title level={2}>Мои задания</Typography.Title>
      <Filters filters={filters} setFilters={setFilters} />
      <TasksList tasks={tasks} />
    </Grid>
  )
}
