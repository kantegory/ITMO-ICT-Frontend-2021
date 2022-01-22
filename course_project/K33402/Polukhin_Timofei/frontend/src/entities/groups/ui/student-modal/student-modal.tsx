import { Form, Radio } from 'antd'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useMembership } from 'entities/groups/api'
import { Modal } from 'shared/ui'

import { useEditMembership } from './lib/use-edit-membership'
import styles from './student-modal.module.scss'

interface Props {
  id: number | null
  onClose: () => void
}

const options = [
  { label: `Админ`, value: `ADMIN` },
  { label: `Редактор`, value: `EDITOR` },
  { label: `Участник`, value: `MEMBER` },
]

export const StudentModal = ({ id, onClose }: Props) => {
  let { groupId } = useParams<{ groupId: string }>()
  const { membership } = useMembership(groupId, id)
  const { handleEditMembership } = useEditMembership(groupId, id, onClose)

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(membership)
  }, [form, membership])

  return (
    <Modal
      title={`${membership?.user.firstName} ${membership?.user.lastName}`}
      visible={!!id}
      onCancel={onClose}
      onOk={form.submit}
    >
      <Form form={form} onFinish={handleEditMembership}>
        <Form.Item name='role'>
          <Radio.Group
            buttonStyle='solid'
            className={styles.radios}
            optionType='button'
            options={options}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
