import styles from '@/styles/BlogCard.module.scss'
import UtilityStyles from '@/styles/Utility.module.scss'
import React from 'react'

// TYPE
import type { Blog } from '@/types'
import Link from "next/link";

const BlogCard: React.FC<Blog> = (props) => {
  return (
    <>
      <div className={styles.blogcard__container}>
        <div className={styles.blogcard__image__container}>
          <img
            src={props?.thumbnailImage}
            alt={props?.title}
            className={styles.blogcard__image}
          />
        </div>
        <div className={styles.blogcard__body__container}>
          <h2>{props?.title}</h2>
          <p>{`${props?.content}`}</p>
        </div>
        <div className={styles.blogcard__footer__container}>
          <small>{props?.updatedAt}</small>
          <div>
            <Link href={`/blog/${props?.id}`}>
              <button className={UtilityStyles.primary__btn}>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default BlogCard
