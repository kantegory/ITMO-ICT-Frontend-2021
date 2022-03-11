import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
}

export const Aside = (props: Props) => {
  const { children } = props
  const [aside, setAside] = useState<HTMLElement>()

  useEffect(() => {
    const aside = document.getElementById(`private-layout-aside`)
    if (aside) {
      setAside(aside)
    }
  }, [])

  return (
    <>
      {aside &&
        createPortal(
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>,
          aside,
        )}
    </>
  )
}
