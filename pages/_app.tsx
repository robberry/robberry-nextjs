import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({
  subsets: ['latin']
})

import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
