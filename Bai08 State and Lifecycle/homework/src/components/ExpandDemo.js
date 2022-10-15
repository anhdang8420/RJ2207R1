import React from "react";
import Button from "./Button";
export default class ExpandDemo extends React.Component {
    constructor(pros) {
        super(pros);
        this.state = {
            isExpanded: false
        }
    }

    changeDisplayState = () => {
        this.setState({ isExpanded: !(this.state.isExpanded) })
    }
    render() {
        let intro;
        if (this.state.isExpanded) {
            intro = (
                <div>
                    <h3>Giới thiệu:</h3>
                    <p>Trong xuất bản và thiết kế đồ họa, Lorem ipsum là văn bản giữ chỗ thường được sử dụng để thể hiện
                        hình thức trực quan của tài liệu hoặc kiểu chữ mà không dựa trên nội dung có ý nghĩa.
                    </p>
                </div>
            )
        }
        else {
            intro = (<p>test</p>)
        }
        return (
            <div className="container">
                <h1 className="p-3" style={{ backgroundColor: 'green', color: 'white' }} >Conditional Rendering</h1>
                <Button className="mt-3" onClick={this.changeDisplayState}
                    label={this.state.isExpanded ? 'Đóng giới thiệu' : 'Xem thêm'} />
                <div className="mt-3">
                    {intro}
                </div>
            </div>
        )
    }
}