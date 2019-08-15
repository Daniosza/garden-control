import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h2>Adicione sua nova plantação</h2>
        <form>
            <div className="container">
                <label>Planta:</label>
                <input type="text" name="nome" placeholder="Nome" />
                <label>Data:</label>
                <input type="text" name="data" placeholder="Data" />
                <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
    );
  }
}

export default Form;