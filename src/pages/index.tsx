import Head from 'next/head'
import { useRouter } from 'next/router'

// COMPONENTS
import Navbar from '@/components/layouts/Navabr'
import BlogCard from '@/components/Blog/Card'

// STYLES
import UtilityStyles from '@/styles/Utility.module.scss'
import styles from '@/styles/Home.module.scss'

// TYPE
import type { Blog } from '@/types'

// HOOKS
import { useGetBlogsByUserId } from '@/hooks/useGetBlogsByUserId'
import FloatingButton from '@/components/Blog/FloatingButton'

export default function Home() {
  const { data: blogs, isFetching: isFetchingBlogs } = useGetBlogsByUserId({
    variables: {
      userId: '123',
    },
  })

  const router = useRouter()

  const toCreateNewBlog = () => {
    router.push('/blog/create')
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <FloatingButton />
      <main className={UtilityStyles.container}>
        <div className={styles.heading__container}>
          <h1>Recent Blogs</h1>
          <div>
            <button
              className={UtilityStyles.primary__btn}
              onClick={toCreateNewBlog}
            >
              Create New Blog
            </button>
          </div>
        </div>
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
