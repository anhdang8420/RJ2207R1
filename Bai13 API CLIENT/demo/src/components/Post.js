import { useEffect, useState } from "react";
import axios from "axios";

export const Post = () => {
    const [posts, setPosts] = useState([]);
    const [mode, setMode] = useState({ status: 'add', action: 'Submit', label: 'Thêm sách' });
    const [form, setForm] = useState({ title: '', author: '', image:'' });

    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then(res => setPosts(res.data))
            .catch(err => alert(err.message));
    }, []);

    const deletePost = (index) => {
        let answer = window.confirm("Bạn có chắc muốn xoá?");
        if (answer == true) {
            axios.delete('http://localhost:3001/posts/' + index)
                .then(res => {
                    if (res.status === 200) {
                        setPosts(posts.filter(post => post.id !== index))
                    }
                });
        }
    }

    const editPost = (index) => {
        setMode({ status: 'edit', action: 'Edit', label: 'Chỉnh Sửa', selectedIndex: index });
        axios.get("http://localhost:3001/posts/" + index)
            .then(res => setForm(res.data))
            .catch(err => alert(err.message))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode.status === 'add') {
            axios.post('http://localhost:3001/posts', {
                title: form.title,
                author: form.author,
                image:form.image
            })
                .then(function (response) {
                    console.log(response);
                    setPosts([...posts, response.data]);
                    setForm({ title: '', author: '',image:'' });
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            axios.put('http://localhost:3001/posts/' + mode.selectedIndex, form)
                .then(response => {
                    console.log(response);
                    let newPosts = posts.map((post, index) => {
                        if (post.id == response.data.id) {
                            post = response.data
                        }
                        return post;
                    });
                    setPosts(newPosts);
                    setForm({ title: '', author: '',image:'' });
                    setMode({ status: 'add', action: 'Submit', label: 'Thêm sách'})
                })
                .catch(err => console.log(err));
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onClickReset = () => {
        setForm({ title: '', author: '', image:'' });
        setMode({ status: 'add', action: 'Submit', label: 'Thêm sách' })
    }
    return (
        <div className="container pt-3">
            <h2>Quản lý sách</h2>
            <div className="row">
                <div className="col-12 col-lg-3"></div>
                <div className="col-12 col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Tên sách</label>
                            <input name="title" type="text" className="form-control" id="title" value={form.title} onChange={handleChange} aria-describedby="titleHelp"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Tác giả</label>
                            <input name="author" type="text" className="form-control" id="author" value={form.author} onChange={handleChange} aria-describedby="authorHelp"></input>
                        </div>
                       
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Link ảnh</label>
                            <input name="image" type="text" className="form-control" id="image" value={form.image} onChange={handleChange} aria-describedby="authorHelp"></input>
                        </div>
                        <button type="submit" className="mt-3 btn btn-primary">{mode.label}</button>
                        <button type="button" className="mt-3 mx-4 btn btn-success" onClick={onClickReset}>Đặt lại</button>
                    </form>
                </div>
                <div className="col-12 col-lg-3"></div>
            </div>
            <div className="post-index">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr className="text-center">
                            <th>Mã sách</th>
                            <th>Tên sách</th>
                            <th>Tác giả</th>
                            <th>Ảnh</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index) => (
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td><img src={post.image} className="img-thumbnail thumbnail--4by3" alt="..." /></td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => editPost(post.id)}>Sửa</button>
                                        <button className="btn btn-danger mx-4" onClick={() => deletePost(post.id)}>Xoá</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}