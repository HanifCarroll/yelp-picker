import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Card from './Card';
import DisplayResults from './DisplayResults';
import ChosenRestaurant from './ChosenRestaurant';

export class DefaultPage extends Component {
  static propTypes = {
    restaurantPicker: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  chooseRandomRestaurant = () => {
    const random = Math.floor(Math.random()*this.props.restaurantPicker.selected.length);
    return this.props.restaurantPicker.selected[random];
  }

  displayResults = () => {
    // If the picking process is not finished...
    if (!this.props.restaurantPicker.finished) {
      // ...Display the search results if they've been retrieved.
      if (this.props.restaurantPicker.restaurants.total == 0 || this.props.restaurantPicker.restaurants === "") {
        return (<h2 className="loading-text">No results found.</h2>);
      }
      else if (this.props.restaurantPicker.restaurants.businesses) {
        return <DisplayResults 
          toggleSelected={this.props.actions.toggleSelectedArray} 
          results={this.props.restaurantPicker.restaurants.businesses}
          finishSearch={() => {
            // Make sure at least 1 restaurant is selected
            if (this.props.restaurantPicker.selected.length) {
              this.props.actions.toggleFinished();
              this.props.actions.updateChosenRestaurant(this.chooseRandomRestaurant());
            } else {
              alert("You haven't selected any restaurants to pick from!")
            }
          }}
        />
      } 
      // ...Display loading text if still fetching request.
      else if (this.props.restaurantPicker.getRestaurantsPending){
        return (<h2 className="loading-text">Loading...</h2>);
      } 
      else {
        return "";
      }
    // If the picking process is finished, display the randomly chosen restaurant
    } else {
        return <ChosenRestaurant chosen={this.props.restaurantPicker.chosenRestaurant} />;
    }
    
  }

  render() {
    return (
      <div className="restaurant-picker-default-page">
        <div className="restaurant-picker-top">
          <h1>What are you in the mood for?</h1>
          <div className="query-form">
            <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search for..." value={this.props.restaurantPicker.query} onChange={e => this.props.actions.updateQuery(e.target.value)} />        
            <input type="text" placeholder="Near..." value={this.props.restaurantPicker.location} onChange={e => this.props.actions.updateLocation(e.target.value)} />
            <button onClick={this.props.actions.getRestaurants}>Submit</button>
            </form>
          </div>
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
