import React, {
  Component
} from 'react';

import './BigMap.css';

class BigMap extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <h1>Map</h1>
      </div>
    );
  }
}

export default BigMap;