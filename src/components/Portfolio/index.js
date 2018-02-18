import React from 'react';

import meta from './meta.jpg';

export default ({ children }) => (
  <section>
    <div className="row">
      <div className="col-12">
        <img src={meta} className="img-fluid" width="100%" alt="meta tags" />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <h2 className="text-muted">Featured Work</h2>
      </div>
    </div>
    <div className="row">{children}</div>
  </section>
);
