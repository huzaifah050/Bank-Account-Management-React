import React from 'react';

export const Home = props => {
  return (
    <div>
      <ul className="collection">
        <div className="container">
          <li className="collection-item avatar">
            <i className="material-icons circle">Human</i>
            <span className="title">Mr. Human Being</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};
