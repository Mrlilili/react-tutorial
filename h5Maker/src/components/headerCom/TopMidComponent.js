'use strict';

import React from 'react';

require('styles/headerCom/TopMid.scss');

class TopMidComponent extends React.Component {
  render() {
    return (
      <div className="topmid-component">
        <ul className="plugin-btns">
          <li>
            <div><i className="text"></i>
              <span>文本</span>
            </div>
          </li>
          <li>
            <div><i className="pic"></i>
              <span>图片</span>
            </div>
          </li>
          <li>
            <div><i className="shape"></i>
              <span>形状</span>
            </div>
          </li>
          <li>
            <div><i className="video"></i>
              <span>视频</span>
            </div>
          </li>
          <li>
            <div><i className="form"></i>
              <span>表单</span>
            </div>
          </li>
          <li>
            <div><i className="btn"></i>
              <span>按钮</span>
            </div>
          </li>
          <li>
            <div><i className="more"></i>
              <span>更多</span>
            </div>
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
