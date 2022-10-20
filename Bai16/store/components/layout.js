import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            className="me-2"
                            height="20"
                            loading="lazy"
                        />
                        <small>MDB BookStore</small>
                    </a>
                </div>
            </nav>

            <div className="wrapper pt-3">
                <div className="row">
                    <div className="col-3">
                        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-4">Chức năng</span>
                            </a>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item">
                                    <Link href="/categories">
                                        <a className="nav-link">Thể loại</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/products">
                                        <a className="nav-link">Sản phẩm</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="">
                                        <a className="nav-link">Báo cáo</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        {children}
                    </div>
                </div>
            </div>

            <footer className="text-center text-lg-start bg-dark text-muted">
                <section className="">
                    <div className="container text-center text-md-start pt-4 mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>

                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>

                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>

    );
}