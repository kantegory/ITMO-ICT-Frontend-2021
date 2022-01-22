import { EditOutlined } from '@ant-design/icons'
import { Button, Form, Input, Typography } from 'antd'
import { Dispatch, useCallback, useEffect } from 'react'

import { TasksList } from 'entities/tasks/ui'
import { Grid, Markdown } from 'shared/ui'

import styles from './subject-form.module.scss'

interface Props {
  isEditing?: boolean
  setIsEditing?: Dispatch<boolean>
  isNew?: boolean
  onSubmit: (values: Components.Schemas.SubjectRequest) => Promise<void> | void
  onDelete?: () => Promise<void> | void
  values?: Components.Schemas.Subject
}

export const SubjectForm = ({
  onSubmit,
  values,
  isNew,
  setIsEditing,
  isEditing,
  onDelete,
}: Props) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(values)
  }, [form, values])

  const handleSave = useCallback(
    async (values) => {
      await onSubmit(values)
      if (setIsEditing) {
        setIsEditing(false)
      }
    },
    [onSubmit, setIsEditing],
  )

  return (
    <Grid>
      <div className={styles.header}>
        <Typography.Title level={2}>
          {isNew ? `Новый предмет` : values?.name}
        </Typography.Title>
        {!isEditing && !!setIsEditing && (
          <Button
            icon={<EditOutlined onClick={() => setIsEditing(true)} />}
            size='middle'
            type='primary'
          />
        )}
      </div>
      <Form form={form} layout='vertical' onFinish={handleSave}>
        {isEditing ? (
          <>
            <Form.Item label='Название предмета' name='name'>
              <Input placeholder='Программирование' />
            </Form.Item>
            <Form.Item label='Описание' name='description'>
              <Markdown isEditing={isEditing} />
            </Form.Item>
            <Form.Item>
              <Button block htmlType='submit' type='primary'>
                Сохранить
              </Button>
            </Form.Item>
            <Form.Item>
              <Button block danger onClick={onDelete}>
                Удалить
              </Button>
            </Form.Item>
          </>
        ) : (
          <Form.Item label='Описание'>
            <Markdown value={values?.description} />
          </Form.Item>
        )}
      </Form>

      {!isNew && !isEditing && <TasksList subjectId={values?.id} tasks={values?.tasks}/>}
    </Grid>
  )
}
