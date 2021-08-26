import React from 'react';
import './Nav.css';

import { Link as Linkes } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li><Linkes to="/rates">Главная</Linkes></li>

              <li><Linkes to="/rates/About">Контакты</Linkes></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

}

export default Nav;
