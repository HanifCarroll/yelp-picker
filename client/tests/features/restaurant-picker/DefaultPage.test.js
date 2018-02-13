import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/restaurant-picker/DefaultPage';

describe('restaurant-picker/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      restaurantPicker: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.restaurant-picker-default-page').getElement()
    ).to.exist;
  });
});
