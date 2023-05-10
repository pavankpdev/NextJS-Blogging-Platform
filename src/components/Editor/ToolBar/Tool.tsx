import styles from '@/styles/Editor.module.scss'
import { IconType } from 'react-icons'
import React from 'react'
import { Editor } from '@/context/Editor'
import { menuHandlers } from '@/config/menuHandlers'
import ImageUploadModal from "@/components/Editor/ToolBar/ImageUploadModal";

type Props = {
  Icon: IconType
  type: string
}

const Tool: React.FC<Props> = (props) => {
  const [isImageModalOpen, setIsImageModalOpen] = React.useState<boolean>(false)
  const editor = React.useContext(Editor)

  if (!editor.instance) return <></>

  let clickHandler = menuHandlers(editor.instance, props.type)

  if(props.type === "image") {
    clickHandler = () => setIsImageModalOpen(true)
  }

  const onCloseImageModal = () => setIsImageModalOpen(false)

  return (
    <>
      <ImageUploadModal isOpen={isImageModalOpen} onClose={onCloseImageModal} />
      <div className={styles.toolbar__item__container}>
        <button className={styles.toolbar__item} onClick={clickHandler}>
          <props.Icon />
        </button>
      </div>
    </>
  )
}

export default Tool
