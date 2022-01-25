import { Dispatch } from 'react'
import ReactMarkdown from 'react-markdown'
import { SimpleMdeReact } from 'react-simplemde-editor'

import 'easymde/dist/easymde.min.css'
import styles from './markdown.module.scss'

interface Props {
  isEditing?: boolean
  value?: string | null
  onChange?: Dispatch<string>
}

const options = { spellChecker: false }

export const Markdown = ({ value, onChange, isEditing }: Props) => {
  return isEditing ? (
    <SimpleMdeReact
      className={styles.editor}
      options={options}
      value={value || undefined}
      onChange={onChange}
    />
  ) : (
    <ReactMarkdown className={styles.viewer}>
      {value || `Описания нет`}
    </ReactMarkdown>
  )
}
