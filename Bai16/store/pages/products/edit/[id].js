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

    const [selectedCategory, setCategory] = useState({ category: categories[0] });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/products/' + id, { ...product, cate_id: parseInt(product.cate_id) })
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
                            {
                                categories.map((category, index) => {
                                    if (index === 0) {
                                        return (<option value={category.id} selected key={index}>{category.name}</option>)
                                    }

                                    else
                                        return (<option value={category.id} key={index}>{category.name}</option>)
                                }
                                )
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
                        <input name="quantity" type="number" value={product.quantity || ''}></input>
                        <br /><br />
                        <label for="price">Giá</label>
                        <input name="price" type="number" value={product.price || ''}></input>

                        <br /><br />
                        <button type="submit">Lưu</button>
                    </form>
                </div>
            </Layout>
        </div>

    )
}