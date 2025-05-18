import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({
  subsets: ['latin']
})

import '../styles/styles.scss'
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
