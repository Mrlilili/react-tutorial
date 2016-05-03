'use strict';

import React from 'react';

require('styles/headerCom/TopMid.scss');

class TopMidComponent extends React.Component {
  render() {
    return (
      <div className="topmid-component">
        topmid
      </div>
    );
  }
}

TopMidComponent.displayName = 'HeaderComTopMidComponent';

// Uncomment properties you need
// TopMidComponent.propTypes = {};
// TopMidComponent.defaultProps = {};

export default TopMidComponent;
