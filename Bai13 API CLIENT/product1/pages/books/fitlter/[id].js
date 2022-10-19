import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function ListBookByCategory() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const [user, setUser] = useState({})

    useEffect(() => {
        //cứ khi nào id thay đổi thì gọi hàm này, nếu create thì ko cần phải phần code lấy trước id này
        axios.get('http://localhost:3001/users/' + id)
            .then(res => {
                console.log(res);
                setUser(res.data);
            })
            .catch(err => { console.log(err); });
    }, [id])
    // console.log(query.id);

    //lấy danh sách bài viết
    const [article, setArticle] = useState({})
    useEffect(() => {
        axios.get('http://localhost:3001/articles')
            .then(res => {
                setArticle(res.data);
            })
            .catch(err => { console.log(err); });
    }, []);
    console.log(query.article);

    return (
        <div>
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
    )
}