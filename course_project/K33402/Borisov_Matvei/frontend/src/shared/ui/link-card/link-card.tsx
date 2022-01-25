import { Card } from 'antd'
import classNames from 'classnames'
import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

import styles from './link-card.module.scss'

interface Props extends ComponentProps<typeof Card> {
  href: ComponentProps<typeof Link>[`to`]
}

export const LinkCard = ({ children, href, className, ...rest }: Props) => {
  return (
    <Link to={href}>
      <Card className={classNames(styles.card, className)} {...rest}>
        {children}
      </Card>
    </Link>
  )
}
