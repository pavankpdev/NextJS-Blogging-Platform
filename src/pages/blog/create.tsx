import dynamic from 'next/dynamic'

const TipTap = dynamic(() => import('@/components/Editor/tiptap'), {
  ssr: false,
})

const Create = () => {
  return (
    <>
      <TipTap />
    </>
  )
}

export default Create
