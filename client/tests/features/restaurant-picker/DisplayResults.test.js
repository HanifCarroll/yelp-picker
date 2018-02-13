import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DisplayResults } from 'src/features/restaurant-picker';

describe('restaurant-picker/DisplayResults', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <DisplayResults />
    );

    expect(
      renderedComponent.find('.restaurant-picker-display-results').getElement()
    ).to.exist;
  });
});
