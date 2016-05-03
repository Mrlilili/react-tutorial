'use strict';

import React from 'react';

class ShowAddButtonComponent extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onToggleForm} id="add-question-btn" className="btn btn-success">添加问题</button>
      </div>
    );
  }
}

ShowAddButtonComponent.displayName = 'ShowAddButtonComponent';

// Uncomment properties you need
// ShowAddButtonComponent.propTypes = {};
// ShowAddButtonComponent.defaultProps = {};

export default ShowAddButtonComponent;
