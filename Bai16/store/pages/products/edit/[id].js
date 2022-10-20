import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";

export default function ProductEdit() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;
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

    //used to update product's information
    useEffect(() => { 
        //cứ khi nào id thay đổi thì gọi hàm này, nếu create thì ko cần phải phần code lấy trước id này
        axios.get('http://localhost:3001/products/' + id)
            .then(res => {
                console.log(res);
                setProduct(res.data);
            })
            .catch(err => { console.log(err); });
    }, [id])
    // console.log(query.id);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const [selectedCategory, setCategory] = useState({ category: categories[0]});
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/products/' + id, product)
            .then(response => {
                router.push('/products');
            })
            .catch(err => { console.log(err); });
    }
    return (
        <div>
            <Layout>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label for="title">Tên sách</label>
                        <input name="title" type="text" value={product.title || ''} onChange={handleChange}></input>
                        <br /><br />
                        <label for="categories">Thể loại</label>
                        <select name="categories" onChange={handleChange}>
                            {
                                categories.map((category, index) => (
                                    <option value={category.name} key={index}>{category.name}</option>
                                ))
                            }
                        </select>
                        <br /><br />
                        <button type="submit">Lưu</button>
                    </form>
                </div>
            </Layout>
        </div>

    )
}