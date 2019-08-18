import React, { Component } from 'react';
import data from './List.json';
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../components/Calendar"

const dataList = data.map((item, index) => {
  return <option value={item.id}>{item.name}</option>
});

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h2>Adicione sua nova plantação</h2>
        <form>
            <div className="container">
            <label>Planta:</label>
            <select>
              {dataList}  
            </select>
            <label>Data:</label>
            <Calendar />
            <input type="submit" value="Cadastrar" />
            </div>
        </form>
      </div>
    );
  }
}

export default Form;