'use strict';

import React from 'react';

require('styles/headerCom/TopMid.scss');

class TopMidComponent extends React.Component {
  render() {
    return (
      <div className="topmid-component">
        <ul>
          <li>文本</li>
          <li>图片</li>
          <li>形状</li>
          <li>视频</li>
          <li>表单</li>
          <li>按钮</li>
          <li>更多</li>
        </ul>
      </div>
    );
  }
}

TopMidComponent.displayName = 'HeaderComTopMidComponent';

// Uncomment properties you need
// TopMidComponent.propTypes = {};
// TopMidComponent.defaultProps = {};

export default TopMidComponent;
