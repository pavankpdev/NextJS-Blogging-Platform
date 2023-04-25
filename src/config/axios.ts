import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://api.jsonbin.io/v3',
  headers: {
    'X-Access-Key':
      '$2b$10$sL29Fsjo9oo4rn0ixhhXnepkPiuQTlJtX/ZOiJ.zs8wY0Ez3GgV4S',
  },
})
