import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="navigation dark-grey">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-4-sm">
                        <ul className="brand">
                            <li>
                                <Link href="/" className="brand type-white heavy">
                                    Rob Berry
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9 col-8-sm align-r">
                        <ul className="nav">
                            <li>
                                <Link href="/work/" className="type-white">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/" className="type-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/hello/" className="type-white">
                                    Hello
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
