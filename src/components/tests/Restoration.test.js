import React from 'react';
import { shallow } from 'enzyme';
import Restoration from '../Restoration'

describe('Restoration', () => {
  const restoration = shallow(<Restoration/>)

  it('renders correctly', () => {
    expect(restoration).toMatchSnapshot();
  })
})