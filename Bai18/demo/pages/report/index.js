import axios from 'axios';
import { useEffect, useState } from "react";

export default function Report() {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:3001/products")
    //         .then(res => {
    //             setProducts(res.data);
    //             products.map(product => ({ quantity: product.quantity }))
    //                 .reduce(total += product.quantity)
    //         })
    //         .catch(err => { console.log(err); });
    // }, []);

    // let total = products.reduce((total, product) => total += product.quantity,0)


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getProducts = axios.get("http://localhost:3001/products");
        const getCategories = axios.get("http://localhost:3001/categories");
        axios
            .all([getCategories, getProducts])
            .then(
                axios.spread((res1, res2) => {
                    const loadingCategories = res1.data.map(category => {
                        return {
                            ...category,
                            product: res2.data.filter(item => {
                                console.log(item)
                                return item.cate_id === category.id;
                            }),
                        };
                    });
                    setCategories(loadingCategories);
                })
            )
            .catch(err => {
                throw err;
            });
    }, []);

    return (
        <di>

            <p>Tổng số lượng sản phẩm: </p>
            <table>

                <thead>
                    <tr>
                        <th>Tên danh mục</th>
                        <th>Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category, index) => (
                            <tr key={index}>
                                <td>{category.name}</td>
                                <td></td>
                            </tr>
                        ))
                    }


                </tbody>

            </table>

        </di>
    )
}