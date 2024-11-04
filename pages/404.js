import Head from 'next/head'
import Layout from '../components/layout'

const title = "Error"
const description = "Whoops, there's been some sort of problem!"

export default function About() {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content="https://robberry.net/404/" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
            </Head>
            <section className="dark-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="type-white heavy">Error</h1>
                            <p className="type-white">
                                Whoops, there&apos;s been some sort of problem!
                            </p>
                        </div>
                        <div className="col-4 hidden-sm"></div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
