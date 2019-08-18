import React, { Component } from 'react';
import '../../src/App.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu-garden-control">
        <div class="item-menu">
            <span>
                Cadastrar
            </span>
        </div>
        <div class="item-menu">
            <span>
                Minha lista
            </span>
        </div>
        <div class="item-menu">
            <span>
                Instruções
            </span>
        </div>
      </div>
    );
  }
}

export default Menu;
