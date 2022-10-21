import axios from 'axios';
import { useEffect, useState } from "react";

export default function Report() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then(res => {
                setProducts(res.data);
                products.map(product => ({ quantity: product.quantity }))
                    .reduce(total += product.quantity)
            })
            .catch(err => { console.log(err); });
    }, []);

    let total = products.reduce((total, product) =>total += product.quantity, 0)

    return (
        <di>
            <p>Tổng số lượng sản phẩm: {total}</p>
        </di>
    )
}