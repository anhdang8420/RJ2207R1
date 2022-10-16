import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";

export const Index = () => {
    return (
        <BrowserRouter>
            <div className="container pt-3">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    
                </ul>

                <hr />
                <div className="main-route-place">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                       
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );

}