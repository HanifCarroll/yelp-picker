import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class SearchOptions extends Component {
  static propTypes = {
    restaurantPicker: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    displaySearchOptions: false,
  };

  displaySearchOptions() {
    if (this.state.displaySearchOptions) {
      return (
        <form style={{ visibility: this.state.displaySearchOptions ? 'visible' : 'hidden' }}>
          <br />
          <p>
            <input
              type="number"
              id="radius"
              min="1"
              max="25"
              value={this.props.restaurantPicker.form.radius}
              onChange={e => this.props.actions.updateRadius(e.target.value)}
            />
            <label htmlFor="radius">Search radius (miles)</label>
          </p>
          <br />
          <p>
            <input
              type="number"
              id="results"
              min="1"
              max="50"
              value={this.props.restaurantPicker.form.resultsLimit}
              onChange={e => this.props.actions.updateResultsLimit(e.target.value)}
            />
            <label htmlFor="results"># of results</label>
          </p>
          <br />
          <p>
            <input
              type="checkbox"
              id="price1"
              name="price"
              checked={this.props.restaurantPicker.form.price1}
              onChange={e => this.props.actions.togglePrice1()}
            />
            <label htmlFor="price1">$</label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="checkbox"
              id="price2"
              name="price"
              checked={this.props.restaurantPicker.form.price2}
              onChange={e => this.props.actions.togglePrice2()}
            />
            <label htmlFor="price2">$$</label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="checkbox"
              id="price3"
              name="price"
              checked={this.props.restaurantPicker.form.price3}
              onChange={e => this.props.actions.togglePrice3()}
            />
            <label htmlFor="price3">$$$</label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="checkbox"
              id="price4"
              name="price"
              checked={this.props.restaurantPicker.form.price4}
              onChange={e => this.props.actions.togglePrice4()}
            />
            <label htmlFor="price4">$$$$</label>
          </p>
          <br />
          <p>
            <input
              type="checkbox"
              id="isOpen"
              checked={this.props.restaurantPicker.form.openNow}
              onChange={this.props.actions.toggleOpenNow}
            />
            <label htmlFor="isOpen">Open now</label>
          </p>
        </form>
      );
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="search-options">
        <br />
        <button onClick={() => this.setState({ displaySearchOptions: !this.state.displaySearchOptions })}>
          Search Options
        </button>
        <div className="options">{this.displaySearchOptions()}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);
