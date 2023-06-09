import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { EditorProvider } from '@/context/Editor'

import '@/styles/globals.css'
import '@/styles/Content.module.scss'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryclient] = useState(() => new QueryClient())

  return (
    <ClerkProvider {...pageProps}>
      <QueryClientProvider client={queryclient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <EditorProvider>
            <Component {...pageProps} />
          </EditorProvider>
        </Hydrate>
      </QueryClientProvider>
    </ClerkProvider>
  )
}

export default MyApp
