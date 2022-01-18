import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { PUBLIC_PATH } from 'shared/config'
import { Grid } from 'shared/ui'

import { useLogin } from './lib/use-login'

export const Login = () => {
  const { handleLogin, isLoading } = useLogin()

  return (
    <Grid>
      <Typography.Title level={2}>Вход</Typography.Title>
      <Form layout='vertical' onFinish={handleLogin}>
        <Form.Item
          name='email'
          rules={[{ required: true, message: `Введите почту` }]}
        >
          <Input placeholder='Почта' prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: `Введите пароль` }]}
        >
          <Input
            placeholder='Пароль'
            prefix={<LockOutlined />}
            type='password'
          />
        </Form.Item>
        <Form.Item>
          <Button block htmlType='submit' loading={isLoading} type='primary'>
            Войти
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to={PUBLIC_PATH.SIGNUP}>
            <Button block>Зарегистрироваться</Button>
          </Link>
        </Form.Item>
        <Form.Item>
          <Link to={PUBLIC_PATH.RESTORE}>
            <Button block type='link'>
              Забыли пароль?
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </Grid>
  )
}
