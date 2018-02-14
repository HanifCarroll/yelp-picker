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
          <img src={restaurant.image_url} alt="picture of restaurant" onClick={(e) => e.stopPropagation()}/>
          <p>{restaurant.name}</p>
        </a>
        <p>
          <ReactStars
            count={5}
            value={restaurant.rating}
            size={30}
            edit={false}
          />
        <p>{restaurant.review_count} Reviews</p>
        </p>
        <p>{restaurant.price}</p>
        <br/>
        <p>{restaurant.location.address1}</p>
        <p>{restaurant.location.city}, {restaurant.location.state}</p>
      </div>
    );
  }
}
