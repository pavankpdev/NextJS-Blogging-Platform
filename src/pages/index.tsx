import Head from 'next/head'

// COMPONENTS
import Navbar from '@/components/layouts/Navabr'

// STYLES
import UtilityStyles from '@/styles/Utility.module.scss'

export default function Home() {
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
        <h1>Recent Blogs</h1>
      </main>
    </>
  )
}
