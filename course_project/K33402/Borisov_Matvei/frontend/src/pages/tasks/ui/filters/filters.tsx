import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons'
import { Button, Input, Select } from 'antd'
import { Dispatch, useEffect, useMemo, useState } from 'react'

import { useSubjects } from 'entities/subjects/api'
import { useDebounce } from 'shared/lib'

import styles from './filters.module.scss'

export interface FiltersInterface {
  search?: string
  ordering?: `deadline` | `-deadline`
  subject__in?: string
}

interface Props {
  filters: FiltersInterface
  setFilters: Dispatch<FiltersInterface>
}

export const Filters = ({ filters, setFilters }: Props) => {
  const { subjects } = useSubjects()
  const [search, setSearch] = useState<string>()
  const debouncedSearch = useDebounce(search, 300)

  const options = useMemo(
    () =>
      subjects?.map((subject) => ({
        label: subject.name,
        value: subject.id,
      })),
    [subjects],
  )

  useEffect(() => {
    if (filters.search === debouncedSearch) {
      return
    }
    setFilters({ ...filters, search: debouncedSearch })
  }, [filters, debouncedSearch, setFilters])

  useEffect(() => setSearch(filters.search), [filters.search])

  return (
    <div className={styles.wrapper}>
      <Input.Search
        className={styles.search}
        name='search'
        placeholder='Название'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Select
        className={styles.names}
        maxTagCount='responsive'
        mode='multiple'
        options={options}
        placeholder='Предметы'
        value={filters.subject__in
          ?.split(`,`)
          .filter(Boolean)
          .map((value) => parseInt(value))}
        onChange={(value) =>
          setFilters({ ...filters, subject__in: value.join(`,`) })
        }
      />
      <Button
        onClick={() =>
          setFilters({
            ...filters,
            ordering:
              filters.ordering === `deadline` ? `-deadline` : `deadline`,
          })
        }
      >
        Дедлайн{` `}
        {filters.ordering === `deadline` ? (
          <SortAscendingOutlined />
        ) : (
          <SortDescendingOutlined />
        )}
      </Button>
    </div>
  )
}
