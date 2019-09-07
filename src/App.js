import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Articles from "./Articles";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"samuel"
    }

  }

  handleClick = ()=>{
    this.setState({
      name:"dimeji"
    })
  }

  render() {

    return (
    <Articles />
  );
  }
}


export default App;
