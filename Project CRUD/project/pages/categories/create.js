import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { ErrorMessage, Field, Form, Formik, setNestedObjectValues, useFormikContext } from "formik";
import * as Yup from "yup";

const categoriesSchema = Yup.object().shape({
    name: Yup.string().required(),
    
});

export default function CategoryEdit() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const [category, setCategory] = useState({})

    useEffect(() => {
        axios.get('http://localhost:3001/categories/' + id)
            .then(res => {
                console.log(res);
                setCategory(res.data);
            })
            .catch(err => { console.log(err); });
    }, [id])
    // console.log(query.id);

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/categories', category)
            .then(response => {
                router.push('/categories');
            })
            .catch(err => { console.log(err); });
    }
    return (
        <div>
            <Layout>
                <h2 className="mb-4">Thêm mới thể loại</h2>
                <div className="row">
                    <form className="col-lg-6" onSubmit={handleSubmit}>
                        <label for="name">Thể loại</label>
                        <input class="form-control" placeholder="Nhập tên thể loại" name="name" type="text" value={category.name || ''} onChange={handleChange}></input>
                        <br /><br />
                        <label for="description">Mô tả</label>
                        <input class="form-control" placeholder="Nhập mô tả" name="description" type="text" value={category.description || ''} onChange={handleChange}></input>
                        <br /><br />
                        <button type="submit" className="btn btn-primary mb-4 me-2">Thêm</button>
                    </form>
                </div>
            </Layout>
        </div>

    )
}