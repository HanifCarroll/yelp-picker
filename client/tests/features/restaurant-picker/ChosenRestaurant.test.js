import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ChosenRestaurant } from 'src/features/restaurant-picker';

describe('restaurant-picker/ChosenRestaurant', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <ChosenRestaurant />
    );

    expect(
      renderedComponent.find('.restaurant-picker-chosen-restaurant').getElement()
    ).to.exist;
  });
});
