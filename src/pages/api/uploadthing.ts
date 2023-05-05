import { createNextPageApiHandler } from 'uploadthing/server'
import { ourFileRouter } from '@/provider/uploadthing'

const handler = createNextPageApiHandler({
  router: ourFileRouter,
})

export default handler
