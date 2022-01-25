import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './grid.module.scss'

interface Props {
  className?: string
  children: ReactNode
}

export const Grid = ({ children, className }: Props) => {
  return <div className={classNames(styles.grid, className)}>{children}</div>
}
