import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

import robberry from '../public/assets/images/robberry.jpg'

const title = "How about we say hello"
const description = "I&apos;m Rob Berry, you can reach me on Twitter @robberry or email me."

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <section className="dark-grey">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="type-white heavy">Hello, Nah then *</h1>
              <div className="img-hello-1">
                <Image
                  src={robberry}
                  alt="Rob Berry"
                  width={1000}
                  height={583}
                  placeholder="blur"
                  priority
                />
              </div>
              <p>
                Hi, I&apos;m Rob, I can be found in a few places on the web. Reach me on Twitter <a href="https://twitter.com/robberry" 
                target="_blank" className="heavy type-white" rel="noopener noreferrer">@robberry</a> or <a href="mailto:robert.berry@gmail.com" 
                className="heavy type-white">email</a> me. <a href="https://uk.linkedin.com/in/robberry" className="heavy type-white" 
                target="_blank" rel="noopener noreferrer">Linkedin</a> continues to be the place I document my career moves.
                But that&apos;s pretty much it.
              </p>
              <p className="normal">
                * Nah then is often heard in Yorkshire when friends greet each other and is used like a casual
                &apos;hello&apos;.
              </p>
            </div>
            <div className="col-4 hidden-sm"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}