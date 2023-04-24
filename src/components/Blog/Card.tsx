import styles from '@/styles/BlogCard.module.scss'
import UtilityStyles from '@/styles/Utility.module.scss'
const BlogCard = () => {
  return (
    <>
      <div className={styles.blogcard__container}>
        <div className={styles.blogcard__image__container}>
          <img
            src={
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            }
            alt={'Blog Image'}
            className={styles.blogcard__image}
          />
        </div>
        <div className={styles.blogcard__body__container}>
          <h2>Blog Title</h2>
          <p>Blog Description</p>
        </div>
        <div className={styles.blogcard__footer__container}>
          <small>23 Apr 2023</small>
          <div>
            <button className={UtilityStyles.primary__btn}>Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default BlogCard
