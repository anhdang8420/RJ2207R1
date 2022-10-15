import React, { Component } from 'react';
 
class Hello extends Component {
 
  componentWillUnmount() {
    alert('The component is going to be unmounted'); //Gọi hàm alert() để thông báo component sắp unmount
  }
 
  render() {
    return <h1> Hello Word!!!</h1>;
  }
}
export default Hello
