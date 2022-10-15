import React from 'react';
import Button from './Button';
class CountButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    decrease = (e) => {
        //console.log(e);
        this.setState(
            { count: this.state.count - 1 }
        );
    }
    increase = (e) => {
        console.log(e);
        this.setState(
            { count: this.state.count + 1 }
        );
    }
    //cach 2
    handleClick = (operator) => {
        switch (operator) {
            case '-': this.setState({ count: this.state.count - 1 }); break;
            case '+': this.setState({ count: this.state.count + 1 }); break;
            default: this.setState({ count: 0 }); break;
        }
    };

    render() {

        //cach 1: truyen vao onClick 1 event onClick={this.decrease} 
        return (
            <div className="container pt-3 text-center">
                <Button className="btn btn-primary mx-3" label="Decrease (-)" onClick={this.decrease} /> 
                <span>{this.state.count}</span>
                <Button className="btn btn-primary mx-3" label="Increase (+)" onClick={this.increase} />
            </div>
        )

        // cach 2: truyen vao onClick 1 ham co tham so 
        return (
            <div className="container pt-3 text-center">
                <Button className="btn btn-primary mx-3" label="Decrease (-)" onClick={() => this.handleClick('-')} />
                <span>{this.state.count}</span>
                <Button className="btn btn-primary mx-3" label="Increase (+)" onClick={() => this.handleClick('+')} />
                <Button className="btn btn-primary mx-3" label="Test" onClick={() => this.test(this)} />
            </div>
        )
    }
}
export default CountButton;