import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useUser, SignOutButton } from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome {user?.firstName}</h1>
        <button>
          <SignOutButton />
        </button>
      </main>
    </>
  )
}
