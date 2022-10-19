import axios from 'axios';
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AuthorIndex() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => { console.log(err); });
    }, []);

    return (
        <div>
            Select a author
            <select name="user">
                {
                    users.map((user, index) => (
                        <option value={user.id} key={index}>{user.name}</option>
                    ))
                }
            </select>
            
            <Link href={{
                pathname: 'books/filter/' + user.id
            }}>
                <button>Lọc</button>
            </Link>

        </div>
    )
}