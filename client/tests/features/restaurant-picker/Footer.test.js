import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Footer } from 'src/features/restaurant-picker';

describe('restaurant-picker/Footer', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Footer />
    );

    expect(
      renderedComponent.find('.restaurant-picker-footer').getElement()
    ).to.exist;
  });
});
