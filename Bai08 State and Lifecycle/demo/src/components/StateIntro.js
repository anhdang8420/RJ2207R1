import React from "react";

class StateIntro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'admin',
            password: 'password'
        };
    }

    //Tạo 1 function để gọi this.setState
    handleChange = (event) => {
        this.setState({ username: 'Ánh' }); 
    }
    render() {
        return (
            <div className="container">
                {this.state.username} - {this.state.password}
                <br />
                <button onClick={this.handleChange}> Change name </button>
            </div>
        )
    }
}

export default StateIntro;