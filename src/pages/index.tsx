import Head from 'next/head'
import { useEffect, useState } from 'react'

// COMPONENTS
import Navbar from '@/components/layouts/Navabr'
import BlogCard from '@/components/Blog/Card'

// STYLES
import UtilityStyles from '@/styles/Utility.module.scss'
import styles from '@/styles/Home.module.scss'

// CONFIG
import { axiosInstance as axios } from '@/config/axios'

// TYPE
import type { Blog } from '@/types'

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isFetchingBlogs, setIsFetchingBlogs] = useState(false)

  useEffect(() => {
    setIsFetchingBlogs(true)
    axios({
      method: 'GET',
      url: `/b/${process.env.NEXT_PUBLIC_JSONBIN_BIN_ID}`,
    })
      .then((res) => {
        setBlogs(res.data?.record?.blogs)
      })
      .catch((err) => {
        alert(err?.message || 'Something went wrong')
      })
      .finally(() => {
        setIsFetchingBlogs(false)
      })
  }, [])

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
        <div className={styles.blogcards__deck}>
          {isFetchingBlogs ? (
            <>Fetching your Blogs</>
          ) : (
            blogs.map((blog) => {
              return (
                <BlogCard
                  thumbnailImage={blog?.thumbnailImage}
                  title={blog?.title}
                  content={blog?.content}
                  updatedAt={blog?.updatedAt}
                  id={blog?.id}
                  key={blog?.id}
                />
              )
            })
          )}
        </div>
      </main>
    </>
  )
}
