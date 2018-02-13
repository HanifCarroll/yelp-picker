import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Card from './Card';

export class DefaultPage extends Component {
  static propTypes = {
    restaurantPicker: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    query: '',
  };

  data = {
    id: 'fortune-garden-chinese-restaurant-port-charlotte',
    name: 'Fortune Garden Chinese Restaurant',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/U_Jn2B8wNHDh_q-ytT6hTw/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/fortune-garden-chinese-restaurant-port-charlotte?adjust_creative=Z7wYV7NVNAH_B0eE35d2wg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Z7wYV7NVNAH_B0eE35d2wg',
    review_count: 19,
    categories: [
      {
        alias: 'chinese',
        title: 'Chinese',
      },
    ],
    rating: 3.5,
    coordinates: {
      latitude: 27.0051193237305,
      longitude: -82.1343154907227,
    },
    transactions: [],
    price: '$$',
    location: {
      address1: '1825 Tamiami Trl',
      address2: 'Unit B8',
      address3: '',
      city: 'Port Charlotte',
      zip_code: '33948',
      country: 'US',
      state: 'FL',
      display_address: ['1825 Tamiami Trl', 'Unit B8', 'Port Charlotte, FL 33948'],
    },
    phone: '+19412551899',
    display_phone: '(941) 255-1899',
    distance: 3034.1763099634477,
  };
  //<Card data={this.data}/>

  handleClick = () => {
    //this.setState({query: ''})
    this.props.actions.getRestaurant(this.state.query);
    console.log('hi');
  }

  render() {
    return (
      <div className="restaurant-picker-default-page">
        <h1>What are you in the mood for?</h1>
        <input type="text" value={this.props.restaurantPicker.query} onChange={e => this.props.actions.updateQuery(e.target.value)} />
        <button onClick={this.handleClick}>Submit</button>
        <Card data={this.data || this.props.restaurantPicker.restaurant}/>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    restaurantPicker: state.restaurantPicker,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
