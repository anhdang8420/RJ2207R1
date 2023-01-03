import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";

export default function CategoriesIndex() {
    const [categories, setCategories] = useState([]);
    const getCategories = axios.get("http://localhost:3001/categories");

    useEffect(() => {
        getCategories
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => { console.log(err); });
    }, []);

    const deleteCategory = (index) => {
        let answer = window.confirm("Bạn có chắc muốn xoá?");
        if (answer == true) {
            axios.delete('http://localhost:3001/categories/' + index)
                .then(res => {
                    if (res.status === 200) {
                        setCategories(categories.filter(category => category.id !== index))
                    }
                });
        }
    }
    return (
        <div>
            <Layout>
                <h2>Danh sách thể loại</h2>
                <Link href='/categories/create'>
                    <button className="btn btn-success mb-3">Thêm mới</button>
                </Link>
                <div className="post-index table-responsive">
                    <table className="table table-sm table-hover table-bordered table table-striped">
                        <thead>
                            <tr className="text-center">
                                <th>Mã thể loại</th>
                                <th>Thể loại</th>
                                <th>Mô tả</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((category, index) => (
                                    <tr key={index}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.description}</td>
                                        
                                        <td>
                                            <Link href={{
                                                pathname: 'categories/edit/' + category.id
                                            }}>
                                                <button className="btn btn-primary mx-2 btn-sm">Sửa</button>
                                            </Link>
                                            <button className="btn btn-danger mx-4 btn-sm" onClick={() => deleteCategory(category.id)}>Xoá</button>
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