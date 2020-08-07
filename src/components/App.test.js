import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />)

  it ('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('rendrs a NavBar component', () => {
    expect(app.find('NavBar').exists()).toBe(true);
  })
});