import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
} from 'react-icons/ai'
import { FaHeading, FaImage } from 'react-icons/fa'
import { BiHeading, BiCodeAlt } from 'react-icons/bi'
import { CgFormatHeading } from 'react-icons/cg'
import styles from '@/styles/Editor.module.scss'
import Tool from '@/components/Editor/ToolBar/Tool'
import { IconType } from 'react-icons'
import React from 'react'

type Props = {
  isSaving: boolean
}

type Tools = {
  type: string
  Icon: IconType
}

const ToolBar: React.FC<Props> = (props) => {
  const tools: Array<Tools> = [
    {
      type: 'bold',
      Icon: AiOutlineBold,
    },
    {
      type: 'italic',
      Icon: AiOutlineItalic,
    },
    {
      type: 'underline',
      Icon: AiOutlineUnderline,
    },
    {
      type: 'strike',
      Icon: AiOutlineStrikethrough,
    },
    {
      type: 'heading1',
      Icon: FaHeading,
    },
    {
      type: 'heading2',
      Icon: BiHeading,
    },
    {
      type: 'heading3',
      Icon: CgFormatHeading,
    },
    {
      type: 'code',
      Icon: BiCodeAlt,
    },
  ]

  return (
    <>
      <div className={styles.toolbar__container}>
        <div className={styles.toolbar_items}>
          {tools.map((tool, index) => {
            return <Tool Icon={tool.Icon} type={tool.type} key={index} />
          })}
          <Tool Icon={FaImage} type={'image'} />
        </div>
        <div className={styles.loading_indicator}>
          {props.isSaving ? 'Saving ...' : 'All Changes are Saved'}
        </div>
      </div>
    </>
  )
}

export default ToolBar
