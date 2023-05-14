import { axiosInstance as axios } from '@/config/axios'
import { useMutation } from 'react-query'

type TCreateBlog = {
  title: string
  content: string
  userId: string | number
  id: string
  thumbnailImage?: string
  description: string
}

type MutationParams = {
  variables: TCreateBlog
  onSuccess: (data: unknown) => void
  onError: (error: unknown) => void
  onSettled: (data: unknown, error: unknown) => void
}
const createNewBlog = async (payload: TCreateBlog) => {
  const getAllBlogs = await axios({
    method: 'GET',
    url: `/b/${process.env.NEXT_PUBLIC_JSONBIN_BIN_ID}`,
  })

  const allBlogs =
    getAllBlogs?.data?.record?.blogs?.length > 0
      ? getAllBlogs.data.record.blogs
      : []
  const newBlog = {
    ...payload,
    updatedAt: new Date().toISOString(),
  }

  let blogsToBeUpdated

  // Check if id exists
  if (allBlogs.some((blog: { id: string }) => blog.id === payload.id)) {
    // update existing blog
    blogsToBeUpdated = allBlogs.map((blog: TCreateBlog) => {
      if (blog.id === payload.id) {
        return {
          ...blog,
          title: payload.title,
          content: payload.content,
          thumbnailImage: payload.thumbnailImage,
          description: payload.description,
        }
      }
      return blog
    })
  } else {
    blogsToBeUpdated = [...allBlogs, newBlog]
  }
  await axios({
    method: 'PUT',
    url: `/b/${process.env.NEXT_PUBLIC_JSONBIN_BIN_ID}`,
    data: {
      blogs: blogsToBeUpdated,
    },
  })
  return payload.id
}

export const useCreateBlog = (params: MutationParams) => {
  return useMutation({
    mutationKey: ['create_new_blog', params?.variables?.userId],
    mutationFn: () => createNewBlog(params?.variables),
    onSuccess: (data) => params.onSuccess(data),
    onError: (error) => params.onError(error),
    onSettled: (data, error) => params.onSettled(data, error),
  })
}
