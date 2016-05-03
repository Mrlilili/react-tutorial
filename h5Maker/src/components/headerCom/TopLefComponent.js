'use strict';

import React from 'react';

require('styles/headerCom/TopLef.scss');

class TopLefComponent extends React.Component {
  render() {
    return (
      <div className="toplef-component">
       topLeft
      </div>
    );
  }
}

TopLefComponent.displayName = 'HeaderComTopLefComponent';

// Uncomment properties you need
// TopLefComponent.propTypes = {};
// TopLefComponent.defaultProps = {};

export default TopLefComponent;
