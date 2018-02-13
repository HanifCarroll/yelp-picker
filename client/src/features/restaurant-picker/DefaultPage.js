import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Card from './Card';
import DisplayResults from './DisplayResults';

export class DefaultPage extends Component {
  static propTypes = {
    restaurantPicker: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleClick = () => {
    this.props.actions.getRestaurant();
  }

  displayResults = () => {
    if (this.props.restaurantPicker.restaurant.businesses) {
      return <DisplayResults toggleSelected={this.props.actions.toggleSelectedArray} results={this.props.restaurantPicker.restaurant.businesses}/>
    } else {
      return "No results to display";
    }
  }

  render() {
    return (
      <div className="restaurant-picker-default-page">
        <div className="restaurant-picker-top">
          <h1>What are you in the mood for?</h1>
          Query: <input type="text" value={this.props.restaurantPicker.query} onChange={e => this.props.actions.updateQuery(e.target.value)} />        
          <br />
          Location: <input type="text" value={this.props.restaurantPicker.location} onChange={e => this.props.actions.updateLocation(e.target.value)} />
          <button onClick={this.handleClick}>Submit</button>
        </div>
        {this.displayResults()}
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
