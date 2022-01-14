import Link from 'next/link'

export default function NavBar() {
    return (
        <section className="navigation dark-grey">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-4-sm">
                        <ul className="brand">
                            <li>
                                <Link href="/">
                                    <a className="brand type-white heavy">Rob Berry</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9 col-8-sm align-r">
                        <ul className="nav">
                            <li>
                                <Link href="/work/">
                                    <a className="type-white">Work</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/">
                                    <a className="type-white">About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/hello/">
                                    <a className="type-white">Hello</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}