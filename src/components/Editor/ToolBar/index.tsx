import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
} from 'react-icons/ai'
import { FaHeading } from 'react-icons/fa'
import { BiHeading, BiCodeAlt } from 'react-icons/bi'
import { CgFormatHeading } from 'react-icons/cg'
import styles from '@/styles/Editor.module.scss'
import Tool from '@/components/Editor/ToolBar/Tool'
import { IconType } from 'react-icons'
import React from 'react'

type Props = {
  isSaving: boolean
}

const ToolBar: React.FC<Props> = (props) => {
  const tools: IconType[] = [
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineUnderline,
    AiOutlineStrikethrough,
    FaHeading,
    BiHeading,
    CgFormatHeading,
    BiCodeAlt,
  ]

  return (
    <>
      <div className={styles.toolbar__container}>
        <div className={styles.toolbar_items}>
          {tools.map((tool, index) => {
            return <Tool Icon={tool} key={index} />
          })}
        </div>
        <div className={styles.loading_indicator}>
          {props.isSaving ? 'Saving ...' : 'All Changes are Saved'}
        </div>
      </div>
    </>
  )
}

export default ToolBar
