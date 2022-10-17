import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'

function Table() {
    const students = [
        {
            id: 1,
            name: "Leanne Graham"
        },
        {
            id: 2,
            name: "Ervin Howell"
        },
        {
            id: 3,
            name: "Deckow Crist"
        },
        {
            id: 4,
            name: "Patricia Lebsack"
        },
        {
            id: 5,
            name: "Clementina DuBuque"
        },
        {
            id: 6,
            name: "Glenna Reichert"
        }
    ];

    return (
        <div className='container'>
            <table className="pt-3 table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>
                                <button className="btn btn-primary mx-2">Show</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;