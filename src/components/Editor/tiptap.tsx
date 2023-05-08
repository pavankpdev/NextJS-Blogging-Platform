import { EditorContent } from '@tiptap/react'
import React, { useContext } from 'react'
import { Editor } from '@/context/Editor'
const Tiptap: React.FC = () => {
  const editor = useContext(Editor)

  return <EditorContent editor={editor.instance} />
}

export default Tiptap
