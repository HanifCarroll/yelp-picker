import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Card } from 'src/features/restaurant-picker';

describe('restaurant-picker/Card', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Card />
    );

    expect(
      renderedComponent.find('.restaurant-picker-card').getElement()
    ).to.exist;
  });
});
