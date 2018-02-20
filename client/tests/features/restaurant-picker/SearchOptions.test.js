import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchOptions } from 'src/features/restaurant-picker/SearchOptions';

describe('restaurant-picker/SearchOptions', () => {
  it('renders node with correct class name', () => {
    const props = {
      restaurantPicker: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchOptions {...props} />
    );

    expect(
      renderedComponent.find('.restaurant-picker-search-options').getElement()
    ).to.exist;
  });
});
