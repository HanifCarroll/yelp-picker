import React, { Component } from 'react';
import Card from './Card';

export default class DisplayResults extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="restaurant-picker-display-results">
        <div className="restaurant-picker-display-results-list">
          {this.props.results.map(result => <Card data={result} toggleSelected={this.props.toggleSelected} key={result.id}/>)}
        </div>
        <div className="restaurant-picker-display-button">
          <button onClick={this.props.finishSearch}>Finished</button>
        </div>
      </div>
    );
  }
}
