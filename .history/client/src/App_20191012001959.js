import React, {component} from 'react';
import ApolloClient from 'apollo-boost';
import 
import './App.css';
import logo from './logo.png';

class App extends Component {
  render(){
    return (
      <div className="App">
        <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
      </div>
    );
  }
}

export default App;