import SEO from '../components/seo'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Creative development of technology for the environmental risk sector"
        description="I'm Rob Berry, a creative developer of technology for engineers. My software and systems solve complex numerical and data problems."
        canonical="/"
      />
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
