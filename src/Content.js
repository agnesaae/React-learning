import React, { Component } from 'react';
class Content extends Component{
    render(){
      return(
        <div>
          <h2>Start a new experience with gamong !</h2>
          <p>{this.props.title}</p>
          <p>{this.props.price}</p>
        </div>
         
      );
    }
}

export default Content;