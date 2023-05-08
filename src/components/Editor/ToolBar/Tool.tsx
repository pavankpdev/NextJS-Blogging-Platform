import styles from '@/styles/Editor.module.scss'
import { IconType } from 'react-icons'
import React from 'react'
import { Editor } from '@/context/Editor'

type Props = {
  Icon: IconType
}

const Tool: React.FC<Props> = (props) => {
  const editor = React.useContext(Editor)

  if (!editor.instance) return <></>
  const bold = () => editor?.instance?.chain().focus().toggleBold().run()

  return (
    <>
      <div className={styles.toolbar__item__container}>
        <button className={styles.toolbar__item} onClick={bold}>
          <props.Icon />
        </button>
      </div>
    </>
  )
}

export default Tool
