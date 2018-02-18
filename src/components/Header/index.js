import React from 'react';

import './Header.css';
import udacity from './udacity.png';

export default () => (
  <header className="app_header">
    <div className="row">
      <div className="col-2 col-sm-4">
        <img src={udacity} width="100px" alt="Udacity Logo" />
      </div>
      <div className="col-10 col-sm-8 text-right">
        <h1 className="text-uppercase">Jane Doette</h1>
        <span className="text-uppercase">Front-end Ninja</span>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <hr className="horizontal_line" />
      </div>
    </div>
  </header>
);
