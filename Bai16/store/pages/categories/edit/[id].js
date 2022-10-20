import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
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
        axios.put('http://localhost:3001/categories/' + id, category)
            .then(response => {
                router.push('/categories');
            })
            .catch(err => { console.log(err); });
    }
    return (
        <div>
            <Layout>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label for="name">Thể loại</label>
                        <input placeholder="Enter the name of category" name="name" type="text" value={category.name || ''} onChange={handleChange}></input>
                        <br /><br />
                        <button type="submit">Lưu</button>
                    </form>
                </div>
            </Layout>
        </div>

    )
}