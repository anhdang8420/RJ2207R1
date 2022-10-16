import { useParams } from "react-router-dom";
function Product() {
    // Sử dụng useParams() để lấy giá trị của categoryId
    let { categoryId } = useParams();
    return (
      <div>
        <h3>Id selected {categoryId} </h3>
      </div>
    );
  }
  export default Product;