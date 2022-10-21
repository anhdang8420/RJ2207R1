import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../components/layout";

export default function ProductCreate() {
    const router = useRouter();
    const [product, setProduct] = useState({})
    const [categories, setCategories] = useState([]);

    //get Categories' information
    useEffect(() => {
        axios.get("http://localhost:3001/categories")
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => { console.log(err); });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isNaN(value)) {
            setProduct({ ...product, [name]: value });
        }
        else
            setProduct({ ...product, [name]: +value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...product, cate_id: parseInt(product.cate_id) });

        axios.post('http://localhost:3001/products', { ...product, cate_id: parseInt(product.cate_id) })
            .then(response => {
                router.push('/products');

            })
            .catch(err => { console.log(err); });
    }


    return (
        <div>
            <Layout>
                <div>
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                        <label for="title">Tên sách</label>
                        <input name="title" type="text" value={product.title || ''}></input>
                        <br /><br />
                        Thể loại:
                        <select name="cate_id" onChange={handleChange}>
                            <option>Thể loại</option>
                            {
                                categories.map((category, index) => (
                                    <option value={category.id} key={index}>{category.name}</option>
                                ))

                            }
                        </select>
                        <br /><br />
                        <label for="image">Ảnh</label>
                        <input name="image" type="text" value={product.image || ''}></input>
                        <br /><br />
                        <label for="author">Tác giả</label>
                        <input name="author" type="text" value={product.author || ''}></input>
                        <br /><br />
                        <label for="quantity">Số lượng</label>
                        <input name="quantity" type="text" value={product.quantity || ''}></input>
                        <br /><br />
                        <label for="price">Giá</label>
                        <input name="price" type="text" value={product.price || ''}></input>

                        <br /><br />
                        <button type="submit">Thêm</button>
                    </form>
                </div>
            </Layout>
        </div>

    )
}