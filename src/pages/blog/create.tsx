import dynamic from 'next/dynamic'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

// COMPONENTS
import Navbar from '@/components/layouts/Navabr'
import TitleInput from '@/components/Editor/TitleInput'
import ImageUploader from '@/components/Editor/ImageUploader'

// STYLES
import UtilityStyles from '@/styles/Utility.module.scss'
import Styles from '@/styles/Editor.module.scss'

// HOOKS
import { useCreateBlog } from '@/hooks/useCreateBlog'

// CONTEXT
import { Editor } from '@/context/Editor'

const TipTap = dynamic(() => import('@/components/Editor/tiptap'), {
  ssr: false,
})
const ToolBar = dynamic(() => import('@/components/Editor/ToolBar'), {
  ssr: false,
})

const Create = () => {
  const { user, isLoaded } = useUser()

  const [title, setTitle] = React.useState<string>('')
  const [thumbnailImage, setThumbnailImage] = React.useState<string>('')
  const [blogId] = React.useState<string>(() => `${Date.now()}`)

  const editor = useContext(Editor)

  const { mutate, isLoading } = useCreateBlog({
    variables: {
      title: title || 'Untitled',
      content: editor.content,
      userId: user?.id as string,
      id: `${blogId}:${user?.id}`,
      thumbnailImage,
      description: editor.description || 'No description',
    },
    onSuccess: (data: unknown) => {
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    },
    onSettled: () => {
      console.log('settled')
    },
  })

  useEffect(() => {
    const createBlog = setTimeout(() => {
      if (user?.id) {
        mutate()
      }
    }, 1500)

    return () => clearTimeout(createBlog)
  }, [title, editor.content])

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={UtilityStyles.container}>
        <div className={Styles.tiptap__container}>
          <ImageUploader
            setImage={setThumbnailImage}
            title={'Upload Thumbnail Image'}
          />
          <ToolBar isSaving={isLoading} />
          {isLoaded ? (
            <>
              <TitleInput value={title} setValue={setTitle} />
              <TipTap />
            </>
          ) : (
            <h4>Loading Please wait...</h4>
          )}
        </div>
      </main>
    </>
  )
}

export default Create
