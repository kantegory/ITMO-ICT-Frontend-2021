import { Button, Form, Input, Typography } from 'antd'
import { useEffect, useMemo, useState } from 'react'

import { StudentModal, StudentsList } from 'entities/groups/ui'
import { Grid } from 'shared/ui'
import { PrivateLayout } from 'widgets/private-layout'

interface Props {
  isAdmin?: boolean
  onSubmit: (values: Components.Schemas.GroupRequest) => void
  values?: Components.Schemas.GroupRequest
}

export const GroupEditForm = ({ onSubmit, values, isAdmin }: Props) => {
  const [id, setId] = useState<number | null>(null)
  const [form] = Form.useForm()

  const isNew = useMemo(() => values, [values])

  useEffect(() => {
    form.setFieldsValue(values)
  }, [form, values])

  return (
    <Grid>
      <Typography.Title level={2}>
        {values?.number || `Новая группа`}
      </Typography.Title>
      <Form form={form} layout='vertical' onFinish={onSubmit}>
        <Form.Item label='Номер группы' name='number'>
          <Input placeholder='К33402' />
        </Form.Item>
        <Form.Item>
          <Button block htmlType='submit' type='primary'>
            Сохранить
          </Button>
        </Form.Item>
      </Form>
      {isNew && (
        <PrivateLayout.Aside>
          <StudentsList onUserClick={setId} />
          {isAdmin && <StudentModal id={id} onClose={() => setId(null)} />}
        </PrivateLayout.Aside>
      )}
    </Grid>
  )
}
