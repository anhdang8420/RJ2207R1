import React, { Component } from 'react';
import Home from "./Home";

class StateLoginLogout extends Component {
    constructor(props) {
        super(props);
        //Cập nhật object this.state lần lượt theo các key-value: isLoggedIn: false
        this.state = {
            isLoggedIn: false
        };
    }
    //Khởi tạo hàm handleLogin, hàm này sẽ cập nhật lại giá trị mới cho isLoggedIn bằng true
    handleLogIn = () => {
        this.setState({ isLoggedIn: true })
    }

    //Khởi tạo hàm handleLogout, hàm này sẽ cập nhật lại giá trị mới cho isLoggedIn bằng false
    handleLogOut = () => {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const { isLoggedIn } = this.state; //Khai báo các biến isLoggedIn và form từ state

        //Dùng hàm if để kiểm tra isLoggedIn có = true không
        if (isLoggedIn)
            return (<Home onLogOut={this.handleLogOut} />)
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1>Please Log in</h1>
                    <button onClick={this.handleLogIn}>Log in</button>
                </div>
            </div>
        )
    }
}

export default StateLoginLogout