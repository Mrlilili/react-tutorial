'use strict';

import React from 'react';

require('styles/bodyCom/RightSide.scss');

class RightSideComponent extends React.Component {
  render() {
    return (
      <div className="rightside-component">
        this is rightside
      </div>
    );
  }
}

RightSideComponent.displayName = 'BodyComRightSideComponent';

// Uncomment properties you need
// RightSideComponent.propTypes = {};
// RightSideComponent.defaultProps = {};

export default RightSideComponent;
