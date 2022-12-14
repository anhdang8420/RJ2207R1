import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function ProductEdit() {
    const productEditSchema = Yup.object().shape({
        title: Yup.string().required(),
        cate_id: Yup.string().required(),
        image: Yup.string(),
        author: Yup.string().required(),
        quantity: Yup.number().min(1).max(100).required(),
        price: Yup.number().min(1).required()
    });

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

    useEffect(() => {
        //cứ khi nào id thay đổi thì gọi hàm này, nếu create thì ko cần phải phần code lấy trước id này
        axios.get('http://localhost:3001/products/' + id)
            .then(res => {
                console.log(res);
                setProduct(res.data);
            })
            .catch(err => { console.log(err); });
    }, [id])

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     if (isNaN(value)) {
    //         setProduct({ ...product, [name]: value });

    //     }
    //     else
    //         setProduct({ ...product, [name]: +value });

    // }


    return (
        <div>
            <Layout>
                <h3>Sửa sản phẩm</h3>
                <div className="container pt-3">
                    <Formik
                        initialValues={product}
                        enableReinitialize={true}
                        validationSchema={productEditSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            if (isNaN(values)) {
                                values: values;
                            }
                            else {
                                values: +values;
                            }
                            axios.put('http://localhost:3001/products/' + id, Object.fromEntries(
                                Object.keys(values).map(key => {
                                    if (isNaN(values[key])) return [key, values[key]];
                                    else return [key, +values[key]];
                                })
                            ), { cate_id: parseInt(values.cate_id) })
                                .then(response => {
                                    router.push('/products');
                                })
                                .catch(err => { console.log(err); });
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form >
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                                        <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                            <div className="card-body p-4 text-center">
                                                <div className="form-outline mb-2">
                                                    <Field className="form-control" name="title" type="text" placeholder="Nhập tên sách" />
                                                    <ErrorMessage component="div" className="text-danger" name="title" />
                                                </div>
                                                <div className="form-outline mb-2">
                                                    <Field className="form-control" as="select" name="cate_id" value={product.cate_id || ''}>
                                                        <option className="disabled selected" >Thể loại</option>
                                                        {
                                                            categories.map((category, index) =>
                                                                (<option value={category.id} key={index}>{category.name}</option>)
                                                            )
                                                        }
                                                        <ErrorMessage component="div" className="text-danger" name="cate_id" />
                                                    </Field>
                                                </div>

                                                <div className="form-outline mb-2">
                                                    <Field className="form-control" name="image" placeholder="Enter a link of image" />
                                                    <ErrorMessage component="div" className="text-danger" name="image" />
                                                </div>
                                                <div className="form-outline mb-2">
                                                    <Field className="form-control" name="author" placeholder="Enter an author" />
                                                    <ErrorMessage component="div" className="text-danger" name="author" />
                                                </div>
                                                <div className="form-outline mb-2">
                                                    <Field className="form-control" name="quantity" placeholder="Enter a quantity" />
                                                    <ErrorMessage component="div" className="text-danger" name="quantity" />
                                                </div>
                                                <div className="form-outline mb-2">
                                                    <Field className="form-control" name="price" placeholder="Enter price" />
                                                    <ErrorMessage component="div" className="text-danger" name="price" />
                                                </div>
                                                <button type="submit" className="btn btn-primary mb-4 mx-2">Lưu</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Layout >

        </div >


    )
}