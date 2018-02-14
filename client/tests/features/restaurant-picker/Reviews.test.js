import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Reviews } from 'src/features/restaurant-picker/Reviews';

describe('restaurant-picker/Reviews', () => {
  it('renders node with correct class name', () => {
    const props = {
      restaurantPicker: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Reviews {...props} />
    );

    expect(
      renderedComponent.find('.restaurant-picker-reviews').getElement()
    ).to.exist;
  });
});
