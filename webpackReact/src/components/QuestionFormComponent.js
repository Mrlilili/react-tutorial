'use strict';

import React from 'react';

require('styles//QuestionForm.scss');

class QuestionFormComponent extends React.Component {


  render() {
    let styleObj = {
      display: this.props.formDisplayed ? 'block' : 'none'
    };
    return (
      <div>

        <form style={styleObj} name="addQuestion" className="clearfix">
          <div className="form-group">
            <label for="qtitle">问题</label>
            <input type="text" className="form-control" id="qtitle" placeholder="您的问题的标题"/>
          </div>
          <textarea className="form-control" rows="3" placeholder="问题的描述"></textarea>
          <button className="btn btn-success pull-right">确认</button>
          <button className="btn btn-default pull-right">取消</button>
        </form>
      </div>
    );
  }
}

QuestionFormComponent.displayName = 'QuestionFormComponent';

// Uncomment properties you need
// QuestionFormComponent.propTypes = {};
// QuestionFormComponent.defaultProps = {};

export default QuestionFormComponent;
