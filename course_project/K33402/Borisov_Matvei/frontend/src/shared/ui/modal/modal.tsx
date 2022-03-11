import { Button, Modal as AntModal, Typography } from 'antd'
import classNames from 'classnames'
import { ComponentProps, ReactNode, useEffect } from 'react'

import styles from './modal.module.scss'

interface Props extends Omit<ComponentProps<typeof AntModal>, `closable`> {
  title: ReactNode
}

export const Modal = ({
  title,
  children,
  footer,
  onOk,
  className,
  ...rest
}: Props) => {
  const [modal] = AntModal.useModal()

  useEffect(() => {}, [modal])

  return (
    <>
      <AntModal
        {...rest}
        className={classNames(styles.modal, className)}
        closable={false}
        footer={false}
      >
        <Typography.Title className={styles.title} level={4}>
          {title}
        </Typography.Title>
        {children}
        <div className={styles.footer}>
          {footer || (
            <Button
              block
              type='primary'
              onClick={onOk}
            >
              Сохранить
            </Button>
          )}
        </div>
      </AntModal>
    </>
  )
}
