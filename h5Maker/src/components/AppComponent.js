'use strict';

import React from 'react';
import Header from './HeaderComponent';
import Body from './BodyComponent';
require('styles//App.scss');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app-component">
        <Header />
        <Body />
      </div>
    );
  }
}

AppComponent.displayName = 'AppComponent';

// Uncomment properties you need
// AppComponent.propTypes = {};
// AppComponent.defaultProps = {};

export default AppComponent;
