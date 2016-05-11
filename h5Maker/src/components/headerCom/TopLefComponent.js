'use strict';

import React from 'react';

require('styles/headerCom/TopLef.scss');

class TopLefComponent extends React.Component {
  render() {
    return (
      <div className="toplef-component">
        <a href=""></a>
        <ul>
          <li>撤销</li>
          <li>重做</li>
          <li>添加标尺</li>
        </ul>
      </div>
    );
  }
}

TopLefComponent.displayName = 'HeaderComTopLefComponent';

// Uncomment properties you need
// TopLefComponent.propTypes = {};
// TopLefComponent.defaultProps = {};

export default TopLefComponent;
