import React, { Component } from 'react';
import classNames from 'classnames'
import ReactStars from 'react-stars'

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
        <a href={restaurant.url} target="_blank">
          <img className="restaurant-image" src={restaurant.image_url} alt="picture of restaurant" onClick={(e) => e.stopPropagation()}/>
        </a>
        <p className="restaurant-name">{restaurant.name}</p>
        <div className="restaurant-rating">
          <ReactStars
            count={5}
            value={restaurant.rating}
            size={25}
            edit={false}
          />
        </div>
        <p className="restaurant-reviews">{restaurant.review_count} Reviews</p>
        <p className="restaurant-price">{restaurant.price}</p>      
        <br/>
        <div className="restaurant-address">
          <p>{restaurant.location.address1}</p>
          <p>{restaurant.location.city}, {restaurant.location.state}</p>
        </div>
      </div>
    );
  }
}
