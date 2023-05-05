import { generateReactHelpers } from '@uploadthing/react'

// PROVIDERS
import type { OurFileRouter } from '@/provider/uploadthing'

// STYLEs
import styles from '@/styles/ImageUploader.module.scss'

const { useUploadThing } = generateReactHelpers<OurFileRouter>()

type Props = {
  title?: string
  setImage: React.Dispatch<React.SetStateAction<string>>
}

const ImageUploader: React.FC<Props> = (props) => {
  const { getRootProps, getInputProps, files, startUpload } =
    useUploadThing('imageUploader')

  const handleUpload = async () => {
    const res = await startUpload()
    console.log(res[0].fileUrl)
    props.setImage(res[0].fileUrl)
  }

  return (
    <>
      <div className={styles.image__uploader__container} {...getRootProps()}>
        <input {...getInputProps()} />
        <div>
          {files.length > 0 && (
            <button onClick={handleUpload}>Upload {files.length} files</button>
          )}
        </div>
        <h4>{props?.title || 'Drop files here!'}</h4>
      </div>
    </>
  )
}

export default ImageUploader
