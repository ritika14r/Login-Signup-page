import React from 'react';
import './App.css';

import {Login} from './components/login/index';
import {Register} from "./components/login/index";
class App extends React.Component {
  
  render(){
  return (
    <div className="App">
      
      <div  className="backgroundimage">
        <div className="block">
        
      <Register/>
      <Login/>
      </div>
    </div>
    </div>
  );

}
}

export default App;