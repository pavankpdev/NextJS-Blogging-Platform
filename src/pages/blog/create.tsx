import dynamic from 'next/dynamic'
import Head from "next/head";

// COMPONENTS
import Navbar from "@/components/layouts/Navabr";

// STYLES
import UtilityStyles from "@/styles/Utility.module.scss";
import Styles from '@/styles/Editor.module.scss'

const TipTap = dynamic(() => import('@/components/Editor/tiptap'), {
  ssr: false,
})

const Create = () => {
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
          <TipTap />
        </div>
      </main>
    </>
  )
}

export default Create
