import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

import robberry from '../public/assets/images/robberry.jpg'

const title = "How about we say hello"
const description = "I'm Rob Berry, you can reach me on Twitter @robberry or email me."

const css = { width: '100%', height: 'auto' }

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://robberry.net/hello/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <section className="dark-grey">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="type-white heavy">Hello 👋</h1>
              <div className="img-hello-1">
                <Image
                  src={robberry}
                  alt="Rob Berry"
                  sizes="100vw" style={css}
                  placeholder="blur"
                  priority
                />
              </div>
              <p>
                Hi, I&apos;m Rob, I love talking with anyone about technology. I can be found in a few places on the web, reach out to me on the following:
              </p>
              <ul className='contact'>
                <li>
                  <a href="mailto:robert.berry@gmail.com" className="heavy type-white">robert.berry@gmail.com</a>
                  <div className="label">Email</div>
                </li>
                <li>
                  <a href="https://twitter.com/robberry"
                    target="_blank" className="heavy type-white" rel="noopener noreferrer">@robberry</a>
                  <div className="label">Twitter</div>
                </li>
                <li>
                  <a href="https://uk.linkedin.com/in/robberry" className="heavy type-white"
                    target="_blank" rel="noopener noreferrer">Rob Berry</a>
                  <div className="label">LinkedIn</div>
                </li>
                <li>
                  <a href="https://github.com/robberry" className="heavy type-white"
                    target="_blank" rel="noopener noreferrer">@robberry</a>
                  <div className="label">Github</div>
                </li>
              </ul>
            </div>
            <div className="col-4 hidden-sm"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
