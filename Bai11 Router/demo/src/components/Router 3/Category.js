import { useNavigate } from "react-router-dom"

export default function Category() {
    let navigate = useNavigate();

    //Sử dụng useNavigate() để điều hướng tới path “/product” và gán categoryId vào state
    const sendDataToProduct = event => {
        navigate("/product", { state: { categoryId: event.target.value } });
      };
    return (
        <div>
            <h2>Select a Category:</h2>
            <select defaultValue="default" onChange={e => sendDataToProduct(e)}>
                <option value="default" disabled hidden>
                    Choose your car
                </option>
                <option value="1">Honda</option>
                <option value="2">Suzuki</option>
                <option value="3">Yamaha</option>
            </select>
        </div>
    )
}