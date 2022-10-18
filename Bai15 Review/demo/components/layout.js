import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
    return (

        <div className="container wrapper pt-3 ">
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Changi Bakery</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="row">
                <div className="col-3">
                    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-4">CodeGym</span>
                        </a>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <Link href="/products">
                                    <a className="nav-link">Products</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/articles">
                                    <a className="nav-link">Categories</a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col-9">
                    {children}
                </div>
            </div>
            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; ĐẶNG THỊ ÁNH - 2022</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}