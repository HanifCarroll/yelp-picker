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
      this.props.toggleSelected(this.props.data);
    }
  }
  
"restaurant-picker-card" 
  render() {
    const { data } = this.props;
    return (
      <div className={classNames({"restaurant-picker-card": true, "selected-card": this.state.selected})} onClick={this.toggleSelected} >
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
