import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";

export default function Route3() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}