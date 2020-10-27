import React from 'react';
import { shallow } from 'enzyme';
import HomeShowcase from '../HomeShowcase';

describe('HomeShowcase', () => {
  const homeShowcase = shallow(<HomeShowcase/>);

  it('renders correctly', () => {
    expect(homeShowcase).toMatchSnapshot();
  });

});