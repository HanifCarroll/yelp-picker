import React, { Component } from 'react';
import ReactStars from 'react-stars'

export default class ReviewCard extends Component {
  static propTypes = {

  };

  render() {
    const { review } = this.props;
    return (
      <a href={review.url} target="_blank">
        <div className="restaurant-picker-review-card">
          <p>
            <ReactStars
              count={5}
              value={review.rating}
              size={60}
              edit={false}
            />
          </p>
          <br />
          <p>"{review.text}"</p>
          <br />
          <br />
          <img src={review.user.image_url} alt="picture of reviewer" />
          <p>{review.user.name}</p>
        </div>
      </a>
    );
  }
}
