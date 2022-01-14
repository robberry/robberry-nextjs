export default function CopyRight() {
    return (
        <section className="copy">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="small type-white">Copyright © {new Date().getFullYear()} Rob Berry</p>
                    </div>
                </div>
            </div>
        </section>
    )
}