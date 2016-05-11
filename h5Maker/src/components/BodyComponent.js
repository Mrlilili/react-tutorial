'use strict';

import React from 'react';
import LeftSide from './bodyCom/LeftSideComponent';
import EditView from './bodyCom/EditViewComponent';
import RightSide from './bodyCom/RightSideComponent';
require('styles//Body.scss');

class BodyComponent extends React.Component {
  render() {
    return (
      <div className="body-component">
        <LeftSide />
        <EditView />
        <RightSide />
      </div>
    );
  }
}

BodyComponent.displayName = 'BodyComponent';

// Uncomment properties you need
// BodyComponent.propTypes = {};
// BodyComponent.defaultProps = {};

export default BodyComponent;
