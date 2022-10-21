import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";

export default function ProductsIndex() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = axios.get("http://localhost:3001/products");
        const getCategories = axios.get("http://localhost:3001/categories");
        axios
            .all([getProducts, getCategories])
            .then(
                axios.spread((res1, res2) => {
                    const loadingProducts = res1.data.map(product => {
                        return {
                            ...product,
                            category: res2.data.filter(item => {
                                return item.id === product.cate_id;
                            })[0].name,
                        };
                    });
                    setProducts(loadingProducts);
                })
            )
            .catch(err => {
                throw err;
            });
    }, []);

    const deleteProduct = (index) => {
        let answer = window.confirm("Bạn có chắc muốn xoá?");
        if (answer == true) {
            axios.delete('http://localhost:3001/products/' + index)
                .then(res => {
                    if (res.status === 200) {
                        setProducts(products.filter(product => product.id !== index))
                        setTimeout(() => {
                            window.alert('Đã xoá thành công');
                        }, "1000")
                    }
                });
        }
    }
    return (
        <div>
            <Layout>
                <h2>Danh sách sản phẩm</h2>
                <Link href='/products/create'>
                    <button className="btn btn-success">Thêm mới</button>
                </Link>
                <div className="post-index">
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr className="text-center">
                                <th>Mã sách</th>
                                <th>Tên sách</th>
                                <th>Thể loại</th>
                                <th>Ảnh</th>
                                <th>Tác giả</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.category}</td>
                                        <td><img src={product.image} style={{ 'height': '100px', 'width': '70px' }} className="img-thumbnail thumbnail--4by3" alt="..." /></td>
                                        <td>{product.author}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <Link href={{
                                                pathname: 'products/edit/' + product.id
                                            }}>
                                                <button className="btn btn-primary btn-sm mx-2">Sửa</button>
                                            </Link>
                                            <button className="btn btn-danger btn-sm mx-4" onClick={() => deleteProduct(product.id)}>Xoá</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </Layout >
        </div >
    )
}