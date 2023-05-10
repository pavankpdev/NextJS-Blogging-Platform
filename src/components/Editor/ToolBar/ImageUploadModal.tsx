import ImageUploader from "@/components/Editor/ImageUploader";
import React, { useContext, useEffect } from "react";

// STYLES
import styles from '@/styles/Editor.module.scss'
import UtilityStyles from '@/styles/Utility.module.scss'
import { Editor } from "@/context/Editor";

type Props = {
  isOpen: boolean,
  onClose: VoidFunction
}

const ImageUploadModal: React.FC<Props> = (props) => {

  const [image, setImage] = React.useState<string>('')

  const {instance} = useContext(Editor)

  const modalClasses = props.isOpen
    ? `${styles.editor__image__uploader} ${styles.editor__image__uploader__visible}`
    : `${styles.editor__image__uploader}`

  const closeHandler = () => props.onClose();

  useEffect(() => {
    if(image) {
      instance?.commands.setImage({src: image})
      setImage('');
      props.onClose()
    }
  }, [image])

  return <>
    <div className={modalClasses}>
      <ImageUploader setImage={setImage}  />
      <div>
        <button className={UtilityStyles.primary__btn} onClick={closeHandler}>
          Close
        </button>
      </div>
    </div>
  </>
}

export default ImageUploadModal