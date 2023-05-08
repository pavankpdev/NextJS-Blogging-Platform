import styles from '@/styles/Editor.module.scss'
import { IconType } from 'react-icons'
import React from 'react'
import { Editor } from '@/context/Editor'
import { menuHandlers } from '@/config/menuHandlers'

type Props = {
  Icon: IconType
  type: string
}

const Tool: React.FC<Props> = (props) => {
  const editor = React.useContext(Editor)

  if (!editor.instance) return <></>

  const clickHandler = menuHandlers(editor.instance, props.type)

  return (
    <>
      <div className={styles.toolbar__item__container}>
        <button className={styles.toolbar__item} onClick={clickHandler}>
          <props.Icon />
        </button>
      </div>
    </>
  )
}

export default Tool
