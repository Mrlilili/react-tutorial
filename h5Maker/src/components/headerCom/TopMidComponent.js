'use strict';

import React from 'react';

require('styles/headerCom/TopMid.scss');

class TopMidComponent extends React.Component {
  render() {
    return (
      <div className="topmid-component">
        <ul className="plugin-btns">
          <li><div>文本</div></li>
          <li><div>图片</div></li>
          <li><div>形状</div></li>
          <li><div>视频</div></li>
          <li><div>表单</div></li>
          <li><div>按钮</div></li>
          <li><div>更多</div></li>
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
