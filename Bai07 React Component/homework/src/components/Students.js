export default function Students() {
    console.log(students)
    return (
        <div className="container pt-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(
                            (student, index) => (
                                <tr key={index}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.address}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table >
        </div>
    )
}
const students = [
    {
        id: 1,
        name: 'Maria Anders',
        age: 20,
        address: 'New York, USA'
    },
    {
        id: 2,
        name: 'John Smith',
        age: 19,
        address: 'California, USA'
    },
    {
        id: 3,
        name: 'Anna Smith',
        age: 15,
        address: 'New ZeaLand'
    }

];