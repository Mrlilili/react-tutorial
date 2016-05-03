'use strict';

import React from 'react';
import QuestionItem from './QuestionItemComponent';
require('styles//QuestionList.scss');

class QuestionListComponent extends React.Component {

  render() {
    let questions = this.props.questions;

    let QuestionComps = questions.map(function (qst) {
      return <QuestionItem key={qst.key}
                           questionKey={qst.key}
                           title={qst.title}
                           desc={qst.description}
                           voteCount={qst.voteCount}
      />
    });
    return (
      <div>
        <div id="questions">
          {QuestionComps}
        </div>
      </div>
    );
  }
}

QuestionListComponent.displayName = 'QuestionListComponent';

// Uncomment properties you need
// QuestionListComponent.propTypes = {};
// QuestionListComponent.defaultProps = {};

export default QuestionListComponent;
