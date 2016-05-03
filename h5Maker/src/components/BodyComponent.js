'use strict';

import React from 'react';

require('styles//Body.scss');

class BodyComponent extends React.Component {
  render() {
    return (
      <div className="body-component">
        this is body
      </div>
    );
  }
}

BodyComponent.displayName = 'BodyComponent';

// Uncomment properties you need
// BodyComponent.propTypes = {};
// BodyComponent.defaultProps = {};

export default BodyComponent;
