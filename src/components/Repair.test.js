import React from 'react';
import { shallow } from 'enzyme';
import Repair from './Repair';

describe('Repair', () => {
  const repair = shallow(<Repair/>);

  it('renders correctly', () => {
    expect(repair).toMatchSnapshot();
  })
})