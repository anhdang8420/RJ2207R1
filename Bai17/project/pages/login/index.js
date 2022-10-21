import Login from "../../components/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage, Field, Form, Formik, setNestedObjectValues, useFormikContext } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";

export default function LoginIndex() {
    const [form, setForm] = useState({ email: '', password: '' });


    const loginSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).max(10).required(),
    });

    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/accounts")
            .then(res => {
                setAccounts(res.data);
            })
            .catch(err => { console.log(err); });
    }, []);

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    return (
        <div>
            <Login>
                <h3 className="mb-4 fw-bold text-center">Sign in</h3>

                <div className="container pt-3">
                    <Formik
                        initialValues={form}
                        enableReinitialize={true}
                        validationSchema={loginSchema}
                        onSubmit={(value, { resetForm }) => {
                            if (value.email === 'admin@gmail.com' && value.password === 'letmein') {
                                Router.push("/products");
                            } else {
                                setForm({ email: "", password: "" });
                                alert("Please check username / password and try again.");
                            }
                        }}

                    >
                        <Form>
                            <div className="form-outline mb-2">
                                <Field className="form-control" name="email" placeholder="Enter your email" value={form.email || ""} onChange={handleChange} />
                                <ErrorMessage component="div" className="text-danger" name="email" />
                            </div>
                            <div className="form-outline mb-2">
                                <Field className="form-control" name="password" type="password" placeholder="Enter your password" value={form.password || ""} onChange={handleChange} />
                                <ErrorMessage component="div" className="text-danger" name="password" />
                            </div>
                            <div className="form-check d-flex justify-content-start mb-3">
                                <input className="form-check-input ml-lg-3" type="checkbox" value="" id="form1Example3" />
                                <label className="form-check-label" for="form1Example3"> Remember password </label>
                            </div>
                            <div class="d-grid gap-1">

                                <button type="submit" className="btn btn-primary mb-3 me-2">Login</button>
                            </div>
                            <hr />
                            <div class="d-grid gap-2">
                                <button class="btn btn-danger mb-2 me-2" type="button"><i class="fab fa-google me-2"></i>Sign in with google</button>
                                <button class="btn btn-primary me-2 " type="button"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
                            </div>
                        </Form>
                    </Formik>
                </div>


            </Login >
        </div >
    )
}