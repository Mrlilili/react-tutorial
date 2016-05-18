'use strict';

import React from 'react';

require('styles/bodyCom/EditView.scss');
let t = require('../../images/test.png');
class EditViewComponent extends React.Component {
  render() {
    return (
      <div className="editview-component">
        this is edit view

      </div>
    );
  }
}

EditViewComponent.displayName = 'BodyComEditViewComponent';

// Uncomment properties you need
// EditViewComponent.propTypes = {};
// EditViewComponent.defaultProps = {};

export default EditViewComponent;
