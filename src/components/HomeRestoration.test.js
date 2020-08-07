import React from 'react';
import { shallow } from 'enzyme';
import HomeRestoration from './HomeRestoration';

describe('HomeRestoration', () => {
  const homeRestoration = shallow(<HomeRestoration/>)

  it('renders correctly', () => {
    expect(homeRestoration).toMatchSnapshot();
  })

  it('has a link to `restoration` page', () => {
    expect(homeRestoration.find('.btn-blue').props().to).toBe('/restoration');
  })
})