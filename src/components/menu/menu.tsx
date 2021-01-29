import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const menu = () => {
  return (
    <div className="menu">
      <ul>
        <li className="counter">
          <Link to="/">Edit</Link>
        </li>
        <li className="showcounter">
          <Link to="/showcount">Show</Link>
        </li>
      </ul>
    </div>
  );
};

export default menu;
