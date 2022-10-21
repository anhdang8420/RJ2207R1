import axios from 'axios';
import { useEffect, useState } from "react";

export default function Report() {
    let total = 0;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then(res => {
                setProducts(res.data);
                products.map(product => ({ quantity: product.quantity }))
                console.log(products);
            })
            .catch(err => { console.log(err); });
    }, []);


    function Sum(){
        for (let i = 0; i < products.length; i++) {
            total += products[i];
        }
        return total;
    }
    return (
        <di>
            <p>Tổng số lượng: {total}</p>
        </di>
    )
}