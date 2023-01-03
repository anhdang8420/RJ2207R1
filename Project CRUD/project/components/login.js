import { Children } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Login({children}) {
    return (
        <div>
            <section className="vh-100" style= {{backgroundColor: "#508bfc"}}>
                <div className="container py-4 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 text-center">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}