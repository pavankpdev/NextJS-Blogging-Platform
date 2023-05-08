import { Editor } from "@tiptap/react";

export const menuHandlers = (editor: Editor, type: string) => {
  const handlers: Record<string, VoidFunction> = {
    bold: editor.chain().focus().toggleBold().run,
    italic: editor.chain().focus().toggleItalic().run,
    underline: () => editor.commands.toggleUnderline(),
    strike: editor.chain().focus().toggleStrike().run,
    heading1: editor.chain().focus().setHeading({ level: 1 }).run,
    heading2: editor.chain().focus().setHeading({ level: 2 }).run,
    heading3: editor.chain().focus().setHeading({ level: 3 }).run,
    code: editor.chain().focus().toggleCode().run,
  }

  return handlers[type]
}
