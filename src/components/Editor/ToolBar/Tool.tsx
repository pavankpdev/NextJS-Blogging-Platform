import styles from '@/styles/Editor.module.scss'
import { IconType } from 'react-icons'
import React from 'react'

type Props = {
  Icon: IconType
}

const Tool: React.FC<Props> = (props) => {
  return (
    <>
      <div className={styles.toolbar__item__container}>
        <button className={styles.toolbar__item}>
          <props.Icon />
        </button>
      </div>
    </>
  )
}

export default Tool
