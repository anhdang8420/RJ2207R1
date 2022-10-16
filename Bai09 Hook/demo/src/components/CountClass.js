import React from "react";
class CountClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                {/* gia tăng state.count khi người dùng bấm vào nút bằng cách gọi hàm this.setState() */}
                <p>Bạn đã bấm {this.state.count} lần</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Bấm vào tôi
                </button>
            </div>
        );
    }
}
export default CountClass;