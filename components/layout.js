import Head from 'next/head'
import NavBar from './navbar'
import Footer from './footer'
import CopyRight from './copyright'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="copyright" content="Copyright © 2022 Rob Berry" />

                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://robberry.net/assets/images/icon.png" />
            </Head>
            <NavBar />
            {children}
            <Footer />
            <CopyRight />
        </>
    )
}