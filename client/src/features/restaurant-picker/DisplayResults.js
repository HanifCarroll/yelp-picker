import React, { Component } from 'react';
import Card from './Card';

export default class DisplayResults extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="restaurant-picker-display-results">
        {this.props.results.map(result => <Card data={result} toggleSelected={this.props.toggleSelected} />)}
      </div>
    );
  }
}
