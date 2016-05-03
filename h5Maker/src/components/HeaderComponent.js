'use strict';

import React from 'react';
import TopLeft  from './headerCom/TopLefComponent';
import TopMid from './headerCom/TopMidComponent';
import TopRight  from './headerCom/TopRightComponent';

require('styles//Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <TopLeft />
        <TopMid />
        <TopRight />
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
