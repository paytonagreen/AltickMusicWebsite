import React from 'react';
import { shallow } from 'enzyme';
import HomeAbout from './HomeAbout';

describe('HomeAbout', () => {
  const homeAbout = shallow(<HomeAbout/>)

  it('renders correctly', () => {
    expect(homeAbout).toMatchSnapshot();
  })

  it('has a link to `restoration` page', () => {
    expect(homeAbout.find('.btn').props().to).toBe('/restoration');
  })
})