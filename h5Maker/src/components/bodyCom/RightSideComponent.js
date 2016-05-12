'use strict';

import React from 'react';

require('styles/bodyCom/RightSide.scss');

class RightSideComponent extends React.Component {
  render() {
    return (
      <div className="rightside-component">
        <ul className="tab-nav">
          <li>页面背景</li>
          <li className="active">功能</li>
        </ul>
      </div>
    );
  }
}

RightSideComponent.displayName = 'BodyComRightSideComponent';

// Uncomment properties you need
// RightSideComponent.propTypes = {};
// RightSideComponent.defaultProps = {};

export default RightSideComponent;
