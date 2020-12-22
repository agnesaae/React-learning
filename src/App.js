import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

//สร้าง component ชื่อว่า App โดยใช้ JSX
class App extends Component {
    /*
    constructor(){
      super();
      
      this.state = {
        data:[],
        message:"Unlike",
        type:""
      };
      this.changeMessage = this.changeMessage.bind(this);
      this.insertData = this.insertData.bind(this);
      
    }
    */

    /*
    changeMessage(){
      this.setState({message:"Like"});
    }
    insertData(){
      var item = "React";
      var myArray = this.state.data;
      myArray.push(item);
      this.setState({data:myArray});
    }
    onChange(event){
      this.setState({type:event.target.value})
    }
    */
    render(){
      return(
        /*
        <div>
          <Header/>
          <Content title="Start New Life With Us" price="4.99$"/>
          <Footer/>
          <h4>{this.state.message}</h4>
          <button onClick = {this.changeMessage}>{this.state.message}</button>
          <br></br>
          <h4>{this.state.data}</h4>
          <button onClick = {this.insertData}>Insert</button><br/><br/>
          <input type= "text" onChange = {this.onChange.bind(this)}/>
          <h5>Welcome : {this.state.type}</h5>
        
        </div>*/

      <div>
        <h1>gamong</h1>
        <h1><a href = "/header">Header</a></h1>
        <h1><a href = "/content">Content</a></h1>
        <h1><a href = "/footer">Footer</a></h1>
      </div>
      );
    }
}

export default App;
