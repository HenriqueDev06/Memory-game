import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '..';

const pageComponent = shallow(<Home />);

describe('Check mout page Default', () => {
  it('return componet with props title', () => {
    expect(pageComponent.find('p').text()).toBe('first page works ');
  });
});
