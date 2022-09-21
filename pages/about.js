import Head from 'next/head'
import Image from 'next/future/image'
import Layout from '../components/layout'

import emmathealane from '../public/assets/images/emma-thea-lane.jpg'
import emmatheacuddles from '../public/assets/images/emma-thea-cuddles.jpg'
import robonbike from '../public/assets/images/rob-on-bike.jpg'
import robrachaelfoxglacier from '../public/assets/images/rob-rachael-fox-glacier.jpg'

const title = "Learn more about Rob Berry"
const description = "I&apos;m Rob Berry, a husband to Rachael and daddy to Emma and Thea. I&#x27;m a Christian, and I enjoy technology, cooking and cycling."

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
              <h1 className="heavy">About</h1>
              <p>
                Hi, I&apos;m Rob, a husband to Rachael and daddy to Emma and Thea. I&apos;m a Christian, and
                I enjoy technology, cooking and cycling.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="heavy">The girls</h2>
            </div>
            <div className="col-6">
              <div className="img-about-1">
                <Image
                  src={emmathealane}
                  alt="Emma and Thea on the lane"
                  width={800}
                  height={533}
                  placeholder="blur"
                  priority
                />
              </div>
              <p className="label">Emma and Thea on the lane</p>
            </div>
            <div className="col-6">
              <div className="img-about-2">
                <Image
                  src={emmatheacuddles}
                  alt="Cuddles with teddy's"
                  width={800}
                  height={533}
                  placeholder="blur"
                  priority
                />
              </div>
              <p className="label">Cuddles with teddy&apos;s</p>
            </div>
          </div>
        </div>
      </section>
      <section className="off-white">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="img-about-3">
                <Image
                  src={robonbike}
                  alt="Rob on his bike"
                  width={800}
                  height={858}
                  placeholder="blur"
                />
              </div>
              <p className="label">On my bike, North Yorkshire, UK</p>
            </div>
            <div className="col-6">
              <h2 className="heavy">Yorkshire</h2>
              <p className="normal">
                The girls and I live in Skipton (North Yorkshire, UK) at read <a href="https://www.newton-grange.co.uk" target="_blank" 
                className="heavy type-grey" rel="noopener noreferrer">Newton Grange</a> farm with a couple of thousand sheep. I know very little about sheep.
              </p>
              <p className="normal">
                Yorkshire is a fabulous place to <a href="https://www.youtube.com/watch?v=IuLBfydBtRU" 
                  target="_blank" className="heavy type-grey" rel="noopener noreferrer">live</a> and <a href="https://www.youtube.com/watch?v=r7XajPVtpKQ" 
                  target="_blank" className="heavy type-grey" rel="noopener noreferrer">cycle</a>. Why not come and visit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h2 className="heavy">Church</h2>
              <p className="normal">
                I&apos;m a Christian. I&apos;ve been going to church all my life, but it was only really at secondary school that 
                I discovered God for myself. That was at an amazing place called the <a href="https://ndcys.com/category/briars/" 
                target="_blank" className="heavy type-grey" rel="noopener noreferrer">The Briars</a>.
              </p>
              <p className="normal">
                Rachael and I met at a church in Leeds called <a href="https://www.stgeorgesleeds.org.uk/" target="_blank"
                rel="noopener noreferrer" className="heavy type-grey">St&nbsp;George&apos;s</a>. Organising a charity cycle ride to Paris 
                brought us together.
              </p>
              <p className="normal">
                As a family we now attend St Andrews, the local village church in Gargrave.
              </p>
            </div>
            <div className="col-1 hidden-sm">
            </div>
            <div className="col-5">
              <div className="img-about-4">
                <Image
                  src={robrachaelfoxglacier}
                  alt="Rob and Rachael at Fox Glacier"
                  width={800}
                  height={800}
                  placeholder="blur"
                />
              </div>
              <p className="label">Rachael and Rob at Fox Glacier, NZ</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}