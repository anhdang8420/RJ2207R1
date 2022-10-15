import React, { Component } from 'react';
import Hello from "./Hello";

class WillUnmount extends Component {
    constructor(props) {
        super(props);

        //Cập nhật object this.state lần lượt theo các key-value:
        this.state = {
            display: true
        };
    }

    //Khai báo hàm delete cập nhật lại giá trị display bằng false
    delete = () => {
        this.setState({ display: false });
    };

    //Gọi hàm render, trả về là element JSX thể hiện element chứa component Hello và nút xoá component Hello
    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello />;
        }
        
        return (
            <div style={{ textAlign: 'center' }}>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }
}

export default WillUnmount;