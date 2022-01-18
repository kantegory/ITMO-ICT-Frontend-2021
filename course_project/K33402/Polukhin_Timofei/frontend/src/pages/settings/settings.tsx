import { Button, Form, Input, Typography } from 'antd'
import { useEffect } from 'react'

import { useMyself } from 'entities/users/api'
import { Grid } from 'shared/ui'

import { useEditPassword, useEditSettings } from './lib'

export const Settings = () => {
  const [userForm] = Form.useForm()
  const [passwordForm] = Form.useForm()
  const { myself } = useMyself()
  const { handleEditUser, isLoading: isUserLoading } = useEditSettings()
  const { handleEditPassword, isLoading: isPasswordLoading } = useEditPassword()

  useEffect(() => {
    userForm.setFieldsValue(myself)
  }, [userForm, myself])

  useEffect(() => {
    passwordForm.setFieldsValue(myself)
  }, [passwordForm, myself])

  return (
    <Grid>
      <Typography.Title level={2}>Настройки</Typography.Title>
      <Form form={userForm} layout='vertical' onFinish={handleEditUser}>
        <Form.Item label='Почта' name='email' rules={[{ required: false }]}>
          <Input disabled placeholder='Почта' type='email' />
        </Form.Item>
        <Form.Item
          required
          label='Имя'
          name='firstName'
          rules={[{ required: false }]}
        >
          <Input placeholder='Имя' />
        </Form.Item>
        <Form.Item
          required
          label='Фамилия'
          name='lastName'
          rules={[{ required: false }]}
        >
          <Input placeholder='Фамилия' />
        </Form.Item>
        <Form.Item>
          <Button
            block
            htmlType='submit'
            loading={isUserLoading}
            type='primary'
          >
            Сохранить
          </Button>
        </Form.Item>
      </Form>
      <Form form={passwordForm} layout='vertical' onFinish={handleEditPassword}>
        <Form.Item
          label='Пароль'
          name='currentPassword'
          rules={[{ required: true, message: `Введите пароль` }]}
        >
          <Input placeholder='Пароль' type='password' />
        </Form.Item>
        <Form.Item
          hasFeedback
          label='Новый пароль'
          name='newPassword'
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
          dependencies={[`newPassword`]}
          label='Повторите пароль'
          name='reNewPassword'
          rules={[
            { required: true, message: `Введите пароль` },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue(`newPassword`) === value) {
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
          <Button
            block
            htmlType='submit'
            loading={isPasswordLoading}
            type='primary'
          >
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </Grid>
  )
}
