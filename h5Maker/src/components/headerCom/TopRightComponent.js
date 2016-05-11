'use strict';

import React from 'react';

require('styles/headerCom/TopRight.scss');

class TopRightComponent extends React.Component {
  render() {
    return (
      <div className="topright-component">
        <ul>
          <li>选择音乐</li>
        </ul>
        <ul className="plugin-btns global-setting">
          <li>设置</li>
          <li>保存</li>
          <li>预览</li>
          <li>发布</li>
          <li>功能</li>
        </ul>
      </div>
    );
  }
}

TopRightComponent.displayName = 'HeaderComTopRightComponent';

// Uncomment properties you need
// TopRightComponent.propTypes = {};
// TopRightComponent.defaultProps = {};

export default TopRightComponent;
