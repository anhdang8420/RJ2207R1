import axios from 'axios';
import { useEffect, useState } from "react";
import Layout from '../../components/layout';

export default function Report() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then(res => {
                setProducts(res.data);
                products.map(product => ({ quantity: product.quantity }))
            })
            .catch(err => { console.log(err); });
    }, []);

    let total = products.reduce((total, product) =>total += product.quantity, 0)

    return (
        <Layout>
            <h2 className='mt-2'>Báo cáo</h2>
            <p className='mt-2'>Tổng số lượng sản phẩm trong kho: <span class="fw-bolder">{total}</span> </p>
        </Layout>

    )
}