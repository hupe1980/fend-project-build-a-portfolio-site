import React from 'react';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Project from './components/Project';

const projects = [
  {
    name: 'Appify',
    imgSrc: `${process.env.PUBLIC_URL}/img/appify.jpg`,
    link: 'https://github.com/udacity/Appify/',
  },
  {
    name: 'Sunflower',
    imgSrc: `${process.env.PUBLIC_URL}/img/sunflower.jpg`,
    link: 'https://github.com/udacity/Sunflower/',
  },
  {
    name: 'Bokeh',
    imgSrc: `${process.env.PUBLIC_URL}/img/bokeh.jpg`,
    link: 'https://github.com/udacity/Bokeh/',
  },
];

export default () => (
  <main className="container">
    <Header />
    <Portfolio>
      {projects.map(project => <Project key={project.name} {...project} />)}
    </Portfolio>
  </main>
);
