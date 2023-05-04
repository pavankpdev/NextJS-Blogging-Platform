import { axiosInstance as axios } from '@/config/axios'
import { useQuery } from 'react-query'

type Variables = {
  userId: string | number
  // add more here
}

type QueryParams = {
  variables: Variables
}
const getBlogsByUserId = async (userId: string | number) => {
  console.log('userId', userId)
  return axios({
    method: 'GET',
    url: `/b/${process.env.NEXT_PUBLIC_JSONBIN_BIN_ID}`,
  })
}

export const useGetBlogsByUserId = (params: QueryParams) => {
  return useQuery({
    queryKey: ['get_blogs_by_user_id', params?.variables?.userId],
    queryFn: () => getBlogsByUserId(params?.variables?.userId),
  })
}
