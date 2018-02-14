import React, { Component } from 'react';

export default class ReviewCard extends Component {
  static propTypes = {

  };

  render() {
    const { review } = this.props;
    return (
      <div className="restaurant-picker-review-card">
        {review.text} - {review.user.name}
      </div>
    );
  }
}
