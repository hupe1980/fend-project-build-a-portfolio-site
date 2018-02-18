import React from 'react';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Project from './components/Project';

const projects = [
  {
    name: 'Appify',
    imgSrc: `${process.env.PUBLIC_URL}/img/appify.jpg`,
    desc:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    link: 'https://github.com/udacity/Appify/',
  },
  {
    name: 'Sunflower',
    imgSrc: `${process.env.PUBLIC_URL}/img/sunflower.jpg`,
    desc:
      ' Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    link: 'https://github.com/udacity/Sunflower/',
  },
  {
    name: 'Bokeh',
    imgSrc: `${process.env.PUBLIC_URL}/img/bokeh.jpg`,
    desc:
      'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
