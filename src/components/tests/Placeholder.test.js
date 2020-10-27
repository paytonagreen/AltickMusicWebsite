import React from 'react';
import { shallow } from 'enzyme';
import Placeholder from '../Placeholder';

describe('Placeholder', () => {
  const placeholder = shallow(<Placeholder/>);

  it('renders correctly', () => {
    expect(placeholder).toMatchSnapshot;
  })

  it('links to Reverb page', () => {
    expect(placeholder.find('a').props().href).toBe('http://reverb.com/shop/altick-music-co')
  })
})