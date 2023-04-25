import { axiosInstance as axios } from "@/config/axios";


export const getBlogsByUserId = async (userId: string | number) => {
  console.log('getBlogsByUserId', userId)
  return axios({
    method: 'GET',
    url: `/b/${process.env.NEXT_PUBLIC_JSONBIN_BIN_ID}`,
  })
}