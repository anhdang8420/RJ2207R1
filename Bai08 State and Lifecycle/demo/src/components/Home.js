import React, { Component } from 'react';

class Home extends Component{
  render () {
    return (
      <div style={{textAlign: 'center'}}>
                    
        {/* gồm lời chào và nút Logout gọi function onLogOut từ props */}
        <div> 
            <h1>Welcome</h1>
            <button onClick={this.props.onLogOut}>Log out</button>
        </div>
      </div>
    )
  }
}
 
export default Home