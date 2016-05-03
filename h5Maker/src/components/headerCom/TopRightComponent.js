'use strict';

import React from 'react';

require('styles/headerCom/TopRight.scss');

class TopRightComponent extends React.Component {
  render() {
    return (
      <div className="topright-component">
        topRigt
      </div>
    );
  }
}

TopRightComponent.displayName = 'HeaderComTopRightComponent';

// Uncomment properties you need
// TopRightComponent.propTypes = {};
// TopRightComponent.defaultProps = {};

export default TopRightComponent;
