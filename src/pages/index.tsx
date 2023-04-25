import Head from 'next/head'
import { useQuery } from "react-query";

// COMPONENTS
import Navbar from '@/components/layouts/Navabr'
import BlogCard from '@/components/Blog/Card'

// STYLES
import UtilityStyles from '@/styles/Utility.module.scss'
import styles from '@/styles/Home.module.scss'


// TYPE
import type { Blog } from '@/types'
import { getBlogsByUserId } from "@/helpers/Blogs/getBlogsByUserId";

export default function Home() {
  const {data: blogs, isFetching: isFetchingBlogs} = useQuery({
    queryKey: ['blogs_by_id'],
    queryFn: () => getBlogsByUserId(123)
  })

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
            (blogs?.data?.record?.blogs as unknown as Blog[]).map((blog) => {
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
