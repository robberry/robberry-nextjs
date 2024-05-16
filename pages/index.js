import Head from 'next/head'
import Layout from '../components/layout'

const title = "Creative development of technology for the environmental risk sector"
const description = "I&apos;m Rob Berry, a creative developer of technology for engineers. My software and systems solve complex numerical and data problems."

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://robberry.net/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <section className="dark-grey">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="xlarge heavy">Hi, I&apos;m Rob Berry, a creative technologist in the environmental risk sector.</h1>
              <p className="xlarge">
                My expertise in software, data and systems development helps tackle complex numerical and data challenges, empowering informed decision-making.
              </p>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
