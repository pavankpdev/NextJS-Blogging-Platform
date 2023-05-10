import Image from 'next/image'
import Navbar from '@/components/layouts/Navabr'
import UtilityStyles from '@/styles/Utility.module.scss'
import styles from '@/styles/BlogView.module.scss'
const Blog = () => {
  return (
    <>
      <Navbar />
      <main className={UtilityStyles.container}>
        <div className={styles.blog__view__container}>
          <div className={styles.blog__view__header}>
            <h1 className={styles.blog__title}>
              The Ultimate Deep Dive into React Server Components (Revised)
            </h1>
            <div className={styles.blog__thumbnail}>
              <Image
                src={
                  'https://cdn.hashnode.com/res/hashnode/image/upload/v1683520341275/a722ac4d-c6e9-4aae-9685-9f1d8b320219.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
                }
                alt={'Blog Title'}
                layout={'fill'}
              />
            </div>
          </div>

          <div className={styles.blog__view__body}>
            <div
              className={'blog__content'}
              dangerouslySetInnerHTML={{
                __html: '<p>Hello Guys</p>',
              }}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Blog
