import React from 'react';

import './Project.css';

export default ({ name, imgSrc, desc, link }) => (
  <div className="col-md-4 col-sm-6 col-xs-12 mb-3">
    <div className="card">
      <img className="card-img-top" src={imgSrc} alt={name} />
      <div className="card-body text-center">
        <h3 className="text-uppercase">{name}</h3>
        <p className="card-text">{desc}</p>
        <a href={link} className="card-link project_link">
          {link}
        </a>
      </div>
    </div>
  </div>
);
