import React from 'react'
import { useEditor, Editor as TipTapEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

type EditorProps = {
  content: string
  instance: TipTapEditor | null
}

export const Editor = React.createContext<EditorProps>({
  content: '',
  instance: null,
})

export const EditorProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [content, setContent] = React.useState<string>('')

  const instance = useEditor({
    extensions: [StarterKit, Underline],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
    },
  })

  return (
    <>
      <Editor.Provider
        value={{
          instance,
          content,
        }}
      >
        {children}
      </Editor.Provider>
    </>
  )
}
