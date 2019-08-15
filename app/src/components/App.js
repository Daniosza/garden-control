import React, { Component } from 'react';
import '../../src/App.css';
import Form from '../components/Form';

class App extends Component {
  render() {
    return (
      <div className="garden-control">
        <div className="header">
          <h2>Bem vindo ao Controle do seu Jardim</h2>
        </div>
        <p className="text">
          Lorem ipsum, lorem ipsum, lorepm pisuiejks.
        </p>
        <Form />
        <div className="footer" />
      </div>
    );
  }
}

export default App;
