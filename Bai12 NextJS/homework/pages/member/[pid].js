import Link from 'next/link';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import students from '../../components/data';

export default function PID() {
    const router = useRouter();
    const { pid } = router.query;
    const student = students[pid]

    return (
        <div className='container pt-3'>
            <p>PID: {student.id}</p>
            <p>Name: {student.name}</p>
            <div>
                <Link href='/table' >
                    <button type="button" className='btn btn-primary'>Back</button>
                </Link>
            </div>
        </div>
    )
}