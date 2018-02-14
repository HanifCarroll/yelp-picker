import React, { Component } from 'react';
import classNames from 'classnames'

export default class Card extends Component {
  static propTypes = {

  };

  state = {
    selected: false
  }

  toggleSelected = () => {
    if (!this.props.finished) {
      this.setState({selected: !this.state.selected});
      this.props.toggleSelected(this.props.restaurant);
    }
  }
  
"restaurant-picker-card" 
  render() {
    const { restaurant } = this.props;
    return (
      <div className={classNames({"restaurant-picker-card": true, "selected-card": this.state.selected})} onClick={this.toggleSelected} >
        <img src={restaurant.image_url} alt="picture of restaurant" />
        <p>{restaurant.name}</p>
        <p>{restaurant.rating}/5 - {restaurant.review_count} Reviews</p>
        <p>{restaurant.price}</p>
        <br/>
        <p>{restaurant.location.address1}</p>
        <p>{restaurant.location.city}, {restaurant.location.state}</p>
      </div>
    );
  }
}
