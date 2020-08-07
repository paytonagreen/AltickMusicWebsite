import React from 'react';
import { shallow } from 'enzyme';

import HomeStore from './HomeStore';

describe('Home Store', () => {
  const homeStore = shallow(<HomeStore/>);

  it('renders correctly', () => {
    expect(homeStore).toMatchSnapshot();
  })

  it('links to `store` page', () => {
    expect(homeStore.find('.btn-blue').props().to).toBe('/store-placeholder');
  })
});