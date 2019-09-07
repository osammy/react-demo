import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  {Article} from './Article';
import {Header} from './Header';
import {Footer} from './Footer';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
    }

  }

//   handleClick = ()=>{
//     this.setState({
//       name:"dimeji"
//     })
//   }

  render() {

    return (
    <div className="container">
        <Header />
        <Article heading="Xenophobia" content="South africa kills nigerians idflijlkgjf" />
        <Article heading="Boko Haram" content="Nigerians kills nigerians idflijlkgjf" />
        <Footer />
    </div>
  );
  }
}


export default Articles;
