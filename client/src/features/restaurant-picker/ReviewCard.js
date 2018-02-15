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
          <ReactStars className="review-rating"
            count={5}
            value={review.rating}
            size={30}
            edit={false}
          />
          <br />
          <p className="review-text">"{review.text}"</p>
          <br />
          <br />
          <img className="review-image" src={review.user.image_url} alt="picture of reviewer" />
          <p className="review-name">{review.user.name}</p>
        </div>
      </a>
    );
  }
}
