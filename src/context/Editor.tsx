import React from 'react'
import { useEditor, Editor as TipTapEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'

type EditorProps = {
  content: string
  description: string
  instance: TipTapEditor | null
}

export const Editor = React.createContext<EditorProps>({
  content: '',
  description: '',
  instance: null,
})

export const EditorProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [content, setContent] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')

  const instance = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.configure({
        inline: true,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
      setDescription(editor.getText())
    },
  })

  return (
    <>
      <Editor.Provider
        value={{
          instance,
          content,
          description,
        }}
      >
        {children}
      </Editor.Provider>
    </>
  )
}
