import { PageHeader } from 'antd'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import { Logo } from 'shared/assets'

import styles from './public-layout.module.scss'

interface Props {
  children: ReactNode
}

export const PublicLayout = (props: Props) => {
  const { children } = props

  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageHeader
        className={styles.header}
        title={<Logo className={styles.logo} />}
      />
      <main className={styles.wrapper}>{children}</main>
    </motion.div>
  )
}
