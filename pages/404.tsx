import SEO from '../components/seo'
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <SEO
                title="Error"
                description="Whoops, there's been some sort of problem!"
                canonical="/404/"
            />
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
