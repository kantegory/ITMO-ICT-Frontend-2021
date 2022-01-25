import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { PUBLIC_PATH } from 'shared/config'
import { Grid } from 'shared/ui'

import { useResetPassword } from './lib'

export const Restore = () => {
  const { handleResetPassword, isLoading } = useResetPassword()

  return (
    <Grid>
      <Typography.Title level={2}>Сброс пароля</Typography.Title>
      <Form layout='vertical' onFinish={handleResetPassword}>
        <Form.Item
          label='Почта'
          name='email'
          rules={[{ required: true, message: `Введите почту` }]}
        >
          <Input placeholder='Почта' type='email' />
        </Form.Item>
        <Form.Item>
          <Button block htmlType='submit' loading={isLoading} type='primary'>
            Сбросить
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to={PUBLIC_PATH.LOGIN}>
            <Button block>Назад</Button>
          </Link>
        </Form.Item>
      </Form>
    </Grid>
  )
}
