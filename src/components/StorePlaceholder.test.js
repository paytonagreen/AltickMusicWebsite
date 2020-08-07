import React from 'react';
import { shallow } from 'enzyme';
import StorePlaceholder from './StorePlaceholder';

describe('StorePlaceholder', () => {
  const storePlaceholder = shallow(<StorePlaceholder/>);

  it('renders correctly', () => {
    expect(storePlaceholder).toMatchSnapshot();
  });
});