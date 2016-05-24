'use strict';

import React from 'react';

require('styles/headerCom/TopMid.scss');

class TopMidComponent extends React.Component {
  render() {
    return (
      <div className="topmid-component">
        <ul className="plugin-btns">
          <li>
            <i className="text"></i>
            <span>文本</span>
          </li>
          <li>
            <i className="pic"></i>
            <span>图片</span>
          </li>
          <li>
            <i className="shape"></i>
            <span>形状</span>
          </li>
          <li>
            <i className="video"></i>
            <span>视频</span>

          </li>
          <li>
            <i className="form"></i>
            <span>表单</span>

          </li>
          <li>
            <i className="btn"></i>
            <span>按钮</span>

          </li>
          <li>
            <i className="more"></i>
            <span>更多</span>

          </li>
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
