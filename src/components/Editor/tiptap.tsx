import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

type Props = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}
const Tiptap: React.FC<Props> = (props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: props.value,
    onUpdate: ({ editor }) => {
      props.setValue(editor.getHTML())
    },
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
