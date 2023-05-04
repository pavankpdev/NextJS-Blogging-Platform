import React from 'react'
import styles from '@/styles/Editor.module.scss'

interface HandleInputChange extends HTMLTextAreaElement {
  target: HTMLInputElement
}

type Props = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const TitleInput: React.FC<Props> = (props) => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null)

  const MinHeight = 50
  const onChange = (event: unknown) =>
    props.setValue((event as HandleInputChange).target.value)

  React.useLayoutEffect(() => {
    if (!textAreaRef?.current) {
      return
    }
    // Reset height to shrink on delete
    textAreaRef.current.style.height = `${MinHeight}px`

    // set the height
    textAreaRef.current.style.height = `${Math.max(
      textAreaRef.current.scrollHeight,
      MinHeight
    )}px`
  }, [props.value])

  return (
    <>
      <textarea
        ref={textAreaRef}
        className={styles.title_input}
        placeholder="Enter a title"
        onChange={onChange}
        value={props.value}
      ></textarea>
    </>
  )
}

export default TitleInput
