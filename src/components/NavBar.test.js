import React from 'react';
import {shallow} from 'enzyme';
import NavBar from './NavBar.js';


describe('NavBar', () => {
  const navbar = shallow(<NavBar/>)

  it('renders properly', () => {
    expect(navbar).toMatchSnapshot();
  });

  describe('the navbar links', () => {

    it('contain a link to the home page', () => {
      expect(navbar.find('.home-link').props().to).toBe('/')
    });
    it('contain a link to the restoration page', () => {
      expect(navbar.find('.restoration-link').props().to).toBe('/restoration')
    });
    it('contain a link to the repair page', () => {
      expect(navbar.find('.repair-link').props().to).toBe('/repair')
    });
    it('contain a link to the store page', () => {
      expect(navbar.find('.store-link').props().to).toBe('/store-placeholder')
    });
  });
});