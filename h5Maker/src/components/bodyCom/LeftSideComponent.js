'use strict';

import React from 'react';

require('styles/bodyCom/LeftSide.scss');

class LeftSideComponent extends React.Component {
  render() {
    return (
      <div className="leftside-component">
        <ul className="tab-nav">
          <li className="sub-nav-active">页面</li>
          <li>图层</li>
        </ul>
      </div>
    );
  }
}

LeftSideComponent.displayName = 'BodyComLeftSideComponent';

// Uncomment properties you need
// LeftSideComponent.propTypes = {};
// LeftSideComponent.defaultProps = {};

export default LeftSideComponent;
