import Head from 'next/head'
import NavBar from './navbar'
import Footer from './footer'
import CopyRight from './copyright'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="copyright" content={`Copyright © ${new Date().getFullYear()} Rob Berry`} />

                <meta name="mobile-web-app-capable" content="yes" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <meta name="theme-color" content="#262929" />
                <meta name="author" content="Rob Berry" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://robberry.net/assets/images/icon.png" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:image" content="https://robberry.net/assets/images/icon.png" />
            </Head>
            <NavBar />
            {children}
            <Footer />
            <CopyRight />
        </>
    )
}
