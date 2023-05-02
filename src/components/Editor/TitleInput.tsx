import React from 'react'
import styles from '@/styles/Editor.module.scss'

interface HandleInputChange extends HTMLTextAreaElement {
  target: HTMLInputElement
}

const TitleInput = () => {
  const [value, setValue] = React.useState<string>('')

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null)

  const MinHeight = 50
  const onChange = (event: unknown) => setValue((event as HandleInputChange).target.value)

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
  }, [value])

  return (
    <>
      <textarea
        ref={textAreaRef}
        className={styles.title_input}
        placeholder="Enter a title"
        onChange={onChange}
        value={value}
      ></textarea>
    </>
  )
}

export default TitleInput
