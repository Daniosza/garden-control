import React, { Component } from 'react';
import '../../src/App.css';
import Form from '../components/Form';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <div className="garden-control">
        <div className="header">
          <h2>Bem vindo ao Controle do seu Jardim</h2>
        </div>
        <Menu />
        <div className="main">
          <Form />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default App;
