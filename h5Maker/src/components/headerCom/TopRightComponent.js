'use strict';

import React from 'react';

require('styles/headerCom/TopRight.scss');

class TopRightComponent extends React.Component {
  render() {
    return (
      <div className="topright-component">
        <ul>
          <li className="music-set-wrapper"><i></i><span>请设置背景音乐</span></li>
        </ul>
        <ul className="plugin-btns global-setting">
          <li><i className="set-up"></i><span>设置</span></li>
          <li><i className="save"></i><span>保存</span></li>
          <li><i className="preview"></i><span>预览</span></li>
          <li><i className="release"></i><span>发布</span></li>
          <li><i className="fuc"></i><span>功能</span></li>
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
