import { EditorContent } from '@tiptap/react'
import React, { useContext } from 'react'
import { Editor } from '@/context/Editor'

import styles from '@/styles/Content.module.scss'

const Tiptap: React.FC = () => {
  const editor = useContext(Editor)

  return (
    <EditorContent editor={editor.instance} className={styles.ProseMirror} />
  )
}

export default Tiptap
