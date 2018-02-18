import React from 'react';
import { shallow } from 'enzyme';
import Project from '../Project';

it('renders without crashing', () => {
  shallow(<Project />);
});
