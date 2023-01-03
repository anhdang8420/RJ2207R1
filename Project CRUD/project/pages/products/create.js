import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { ErrorMessage, Field, Form, Formik, setNestedObjectValues, useFormikContext } from "formik";
import * as Yup from "yup";
import Router from "next/router";

export default function ProductCreate() {
    const productCreateSchema = Yup.object().shape({
        title: Yup.string().required(),
        cate_id: Yup.string().required(),
        image: Yup.string(),
        author: Yup.string().required(),
        quantity: Yup.number().min(1).max(100).required(),
        price: Yup.number().min(1).required()
    });

    const [form, setForm] = useState({ title: '', cate_id: '', image: '', author: '', quantity: '', price: '', });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isNaN(value)) {

            setProduct({ ...product, ...form, [name]: value });
            setForm({ ...form, [e.target.name]: e.target.value });

        }
        else {
            setProduct({ ...product, [name]: +value });
            setForm({ ...form, [e.target.name]: e.target.value });
        }

    }

    const handleSubmit = (e) => {
        axios.post('http://localhost:3001/products', { ...product, cate_id: parseInt(product.cate_id) })
            .then(response => {
                Router.push("/products");
            })
            .catch(err => { console.log(err); });
    }

    return (
        <div>
            <Layout>
                <h2>Thêm sản phẩm</h2>
                <div className="container pt-3">
                    <Formik
                        initialValues={product}
                        enableReinitialize={true}
                        validationSchema={productCreateSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form >
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                                    <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                        <div className="card-body p-4 text-center">
                                            <div className="form-outline mb-2">
                                                <Field className="form-control" name="title" placeholder="Nhập tên sách" value={product.title || ""} onChange={handleChange} />
                                                <ErrorMessage component="div" className="text-danger" name="title" />
                                            </div>
                                            <div className="form-outline mb-2">
                                                <Field className="form-control" as="select" name="cate_id" onChange={handleChange} value={product.cate_id || ''}>
                                                    <option selected> Chọn thể loại</option>
                                                    {
                                                        categories.map((category, index) =>
                                                            (<option value={category.id} key={index}>{category.name}</option>)
                                                        )
                                                    }
                                                    <ErrorMessage component="div" className="text-danger" name="cate_id" />
                                                </Field>
                                            </div>
                                            <div className="form-outline mb-2">
                                                <Field className="form-control" name="image" placeholder="Nhập link ảnh" value={product.image || ""} onChange={handleChange} />
                                                <ErrorMessage component="div" className="text-danger" name="image" />
                                            </div>
                                            <div className="form-outline mb-2">
                                                <Field className="form-control" name="author" placeholder="Nhập tên tác giả" value={product.author || ""} onChange={handleChange} />
                                                <ErrorMessage component="div" className="text-danger" name="author" />
                                            </div>
                                            <div className="form-outline mb-2">
                                                <Field className="form-control" name="quantity" placeholder="Nhập số lượng" value={product.quantity || ""} onChange={handleChange} />
                                                <ErrorMessage component="div" className="text-danger" name="quantity" />
                                            </div>
                                            <div className="form-outline mb-2">
                                                <Field className="form-control" name="price" placeholder="Nhập giá tiền" value={product.price || ""} onChange={handleChange} />
                                                <ErrorMessage component="div" className="text-danger" name="price" />
                                            </div>
                                            <button type="submit" className="btn btn-primary mb-4 mx-2">Thêm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Form>
                    </Formik>
                </div>
            </Layout >
        </div >

    )
}