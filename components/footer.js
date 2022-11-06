import Link from 'next/link'

export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <p className="label type-white">See some of my</p>
                        <p>
                            <Link href="/work/" className="heavy type-white">
                                Work
                            </Link>
                        </p>
                    </div>
                    <div className="col-4">
                        <p className="label type-white">Want to learn more</p>
                        <p>
                            <Link href="/about/" className="heavy type-white">
                                About me
                            </Link>
                        </p>
                    </div>
                    <div className="col-4">
                        <p className="label type-white">How about we say</p>
                        <p>
                            <Link href="/hello/" className="heavy type-white">
                                Hello
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
