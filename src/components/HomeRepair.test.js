import React from 'react';
import { shallow } from 'enzyme';
import HomeRepair from './HomeRepair';

describe('HomeRepair', () => {
  const homeRepair = shallow(<HomeRepair/>)

  it('renders correctly', () => {
    expect(homeRepair).toMatchSnapshot();
  })

  it('has a link to `repair` page', () => {
    expect(homeRepair.find('.btn').props().to).toBe('/repair');
  })
})