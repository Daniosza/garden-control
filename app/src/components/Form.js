import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h2>Adicione sua nova plantação</h2>
        <form>
            <div className="container">
            <label>Planta:</label>
            <select>
              <option value="default" selected="selected">Selecione...</option>
              <option value="cenoura">Cenoura</option>
              <option value="berinjela">Berinjela</option>
              <option value="salsa">Salsa</option>
              <option value="rabanete">Rabanete</option>
              <option value="rucula">Rúcula</option>
            </select>
            <label>Data:</label>
            <input type="text" name="data" placeholder="Data" />
            <input type="submit" value="Cadastrar" />
            </div>
        </form>
      </div>
    );
  }
}

export default Form;