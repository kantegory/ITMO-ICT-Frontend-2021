import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { useAddUser } from 'pages/signup/lib/use-add-user'
import { PUBLIC_PATH } from 'shared/config'
import { Grid } from 'shared/ui'

import styles from './signup.module.scss'

export const Signup = () => {
  const { handleAddUser, isLoading } = useAddUser()

  return (
    <Grid>
      <Typography.Title level={2}>Регистрация</Typography.Title>
      <Form layout='vertical' onFinish={handleAddUser}>
        <Form.Item
          label='Имя'
          name='firstName'
          rules={[{ required: true, message: `Введите имя` }]}
        >
          <Input placeholder='Имя' />
        </Form.Item>
        <Form.Item
          label='Фамилия'
          name='lastName'
          rules={[{ required: true, message: `Введите фамилию` }]}
        >
          <Input placeholder='Фамилия' />
        </Form.Item>
        <Form.Item
          label='Почта'
          name='email'
          rules={[{ required: true, message: `Введите почту` }]}
        >
          <Input placeholder='Почта' />
        </Form.Item>
        <Form.Item
          hasFeedback
          label='Пароль'
          name='password'
          rules={[
            { required: true, message: `Введите пароль` },
            () => ({
              validator(_, value) {
                if (!value || value.length >= 8) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  new Error(`Минимальная длина пароля - 8 символов`),
                )
              },
            }),
          ]}
        >
          <Input placeholder='Пароль' type='password' />
        </Form.Item>
        <Form.Item
          hasFeedback
          dependencies={[`password`]}
          label='Повторите пароль'
          name='rePassword'
          rules={[
            { required: true, message: `Введите пароль` },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue(`password`) === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error(`Пароли должны совпадать!`))
              },
            }),
          ]}
        >
          <Input placeholder='Повторите пароль' type='password' />
        </Form.Item>
        <Form.Item>
          <Button block htmlType='submit' loading={isLoading} type='primary'>
            Зарегистрироваться
          </Button>
        </Form.Item>
        <Form.Item>
          <Typography.Paragraph className={styles.signupText}>
            Уже есть аккаунт? <Link to={PUBLIC_PATH.LOGIN}>Войти</Link>
          </Typography.Paragraph>
        </Form.Item>
      </Form>
    </Grid>
  )
}
