import React, { Component } from 'react';
import Card from './Card';

export default class ChosenRestaurant extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="restaurant-picker-chosen-restaurant">
        <h2>Get ready to chow down at....</h2>
        <Card data={this.props.chosen} finished/>
      </div>
    );
  }
}
