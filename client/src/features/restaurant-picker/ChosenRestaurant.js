import React, { Component } from 'react';
import Card from './Card';
import Reviews from './Reviews';

export default class ChosenRestaurant extends Component {
  static propTypes = {

  };

  render() {
    const { chosen } = this.props;
    return (
      <div className="restaurant-picker-chosen-restaurant">
        <h2>Get ready to chow down at....</h2>
        <Card restaurant={chosen} finished/>
        <Reviews />
      </div>
    );
  }
}
