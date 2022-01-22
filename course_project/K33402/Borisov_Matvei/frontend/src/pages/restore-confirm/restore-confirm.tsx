import { Button, Form, Input, Typography } from 'antd'

import { useResetPasswordConfirm } from './lib'

export const RestoreConfirm = () => {
  const { handleResetPasswordConfirm, isLoading } = useResetPasswordConfirm()

  return (
    <>
      <Typography.Title level={2}>Сброс пароля</Typography.Title>
      <Form layout='vertical' onFinish={handleResetPasswordConfirm}>
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
          <Button block htmlType='submit' loading={isLoading} type='primary'>
            Сбросить пароль
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
