import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({
  subsets: ['latin']
})

import '../styles/styles.scss'

export default function App({ Component, pageProps }) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
