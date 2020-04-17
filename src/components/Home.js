import React from 'react';

export const Home = (props) => {
  return (
    <div>
      <ul className="collection user-welcome">
        <div className="header-items">
          <i className="material-icons person-icon">person</i>
          <li className="collection-item avatar user-welcome items">
            <span className="title">Mr. Human Being</span>
            <p>
              First Line <br />
              Second Line
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
};
