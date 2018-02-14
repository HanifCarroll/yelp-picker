import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ReviewCard } from 'src/features/restaurant-picker';

describe('restaurant-picker/ReviewCard', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <ReviewCard />
    );

    expect(
      renderedComponent.find('.restaurant-picker-review-card').getElement()
    ).to.exist;
  });
});
