import Image from 'next/image'
import Navbar from '@/components/layouts/Navabr'
import UtilityStyles from '@/styles/Utility.module.scss'
import styles from '@/styles/BlogView.module.scss'
import blogContentStyle from '@/styles/Content.module.scss'
import { NextPage, NextPageContext } from "next";
import { axiosInstance as axios } from "@/config/axios";
import type { Blog as BlogType } from '@/types'
import React from "react";

const Blog: NextPage<{blog: BlogType}> = (props) => {
  console.log(props);
  return (
    <>
      <Navbar />
      <main className={UtilityStyles.container}>
        <div className={styles.blog__view__container}>
          <div className={styles.blog__view__header}>
            <h1 className={styles.blog__title}>
              {props.blog.title}
            </h1>
            <div className={styles.blog__thumbnail}>
              <Image
                src={props?.blog?.thumbnailImage || "https://picsum.photos/seed/picsum/536/354"}
                alt={props.blog.title}
                layout={'fill'}
              />
            </div>
          </div>

          <div className={styles.blog__view__body}>
            <div
              className={blogContentStyle.blog__content}
              dangerouslySetInnerHTML={{
                __html: props.blog.content,
              }}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const { data } =  await axios({
    method: 'GET',
    url: `/b/${process.env.NEXT_PUBLIC_JSONBIN_BIN_ID}`,
  })
  return {
    props: {
      blog: data?.record?.blogs.find((blog: {id: string}) => blog.id === context.query.id),
    }, // will be passed to the page component as props
  };
}
export default Blog
