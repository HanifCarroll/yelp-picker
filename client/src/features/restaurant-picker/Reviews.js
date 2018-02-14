import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ReviewCard from './ReviewCard';

export class Reviews extends Component {
  static propTypes = {
    restaurantPicker: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  renderBody = () => {
    if (this.props.restaurantPicker.reviews.length) {
      return (
        <div className="reviews">
          {this.props.restaurantPicker.reviews.map(review => <ReviewCard review={review} key={review.id}/>)}
        </div>
      );
    } else if (this.props.restaurantPicker.getReviewsPending) {
      return <p>Loading...</p>
    } else {
      return  <button onClick={() => this.props.actions.getReviews()}>Show me!</button>
    }
  }
  render() {
    const { chosenRestaurant } = this.props.restaurantPicker;
    return (
      <div className="restaurant-picker-reviews">
        <div className="restaurant-picker-reviews-header">
          <h3>What are people saying about {chosenRestaurant.name}?</h3>
          <br />
          <p>Click the review to read the full entry on Yelp!</p>
        </div>
          <div className="restaurant-picker-reviews-body">
           {this.renderBody()}
        </div>
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
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);