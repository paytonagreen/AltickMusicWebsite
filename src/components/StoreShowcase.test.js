import React from 'react';
import { shallow } from 'enzyme'

import StoreShowcase from './StoreShowcase';

describe('StoreShowcase', () => {
  const storeShowcase = shallow(<StoreShowcase/>);

  it ('renders correctly', () => {
    expect(storeShowcase).toMatchSnapshot();
  });

  it('links to Reverb', () => {
    beforeEach(() => {
      storeShowcase.find('btn-blue').simulate('click');
    })
    expect(storeShowcase.find('a').props().href).toBe('http://reverb.com/shop/altick-music-co')
  })
});