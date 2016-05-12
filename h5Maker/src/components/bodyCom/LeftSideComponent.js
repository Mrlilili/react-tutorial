'use strict';

import React from 'react';

require('styles/bodyCom/LeftSide.scss');

class LeftSideComponent extends React.Component {
  render() {
    return (
      <div className="leftside-component">
        this is leftside123
      </div>
    );
  }
}

LeftSideComponent.displayName = 'BodyComLeftSideComponent';

// Uncomment properties you need
// LeftSideComponent.propTypes = {};
// LeftSideComponent.defaultProps = {};

export default LeftSideComponent;
