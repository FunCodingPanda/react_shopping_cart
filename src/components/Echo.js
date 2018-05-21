import React, { Component } from 'react';

class Echo extends Component {
  state = { greeting: this.props.original };

  render() {
    return (
      <div className="container">
        <p>
          <input
            value={this.state.greeting}
            onChange={e => this.setState({ greeting: e.target.value })}
          />
        </p>
        {this.state.greeting}
      </div>
    );
  }
}

export default Echo;
