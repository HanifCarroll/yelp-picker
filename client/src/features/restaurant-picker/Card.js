import React, { Component } from 'react';

export default class Card extends Component {
  static propTypes = {

  };

  render() {
    const { data } = this.props;
    return (
      <div className="restaurant-picker-card">
        <img src={data.image_url} alt="picture of restaurant" />
        <p>{data.name}</p>
        <p>{data.rating}/5 - {data.review_count} Reviews</p>
        <p>{data.price}</p>
        <br/>
        <p>{data.location.address1}</p>
        <p>{data.location.city}, {data.location.state}</p>

      </div>
    );
  }
}
