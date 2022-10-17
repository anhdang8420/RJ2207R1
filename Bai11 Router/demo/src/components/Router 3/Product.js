import { useLocation, useNavigate } from "react-router-dom";

function Product() {
    //Lấy giá trị state từ userLocation();
    const { state } = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            {/* Lấy giá trị categoryId từ biến state */}
            <h3>Id selected {state.categoryId} </h3>
            <br/>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
export default Product;
