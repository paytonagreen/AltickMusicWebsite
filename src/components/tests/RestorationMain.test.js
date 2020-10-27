import React from 'react';
import { shallow } from 'enzyme';
import RestorationMain from '../RestorationMain';

describe('RestorationMain', () => {
  const restorationMain = shallow(<RestorationMain/>);

  it('renders correctly', () => {
    expect(restorationMain).toMatchSnapshot();
  })
})