require('normalize.css/normalize.css');
require('styles/dist/css/bootStrap.css');
import React from 'react';
import ShowAddButton from './ShowAddButtonComponent';
import QuestionForm from './QuestionFormComponent';
import QuestionList from './QuestionListComponent';
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDisplayed: true
    }
  }

  onToggleForm() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  }
<<<<<<< HEAD
  componentDidMount() {
    console.log(this.refs.test);
  }
=======
>>>>>>> a43bd1edee92fde9f3a777ebe847787b0e93fd66

  render() {
    return (
      <div className="index">
        <div className="jumbotron text-center">
          <div className="container">
            <h1>React问答</h1>
<<<<<<< HEAD
            <ShowAddButton ref = "test" onToggleForm={this.onToggleForm.bind(this)}/>
=======
            <ShowAddButton onToggleForm={this.onToggleForm.bind(this)}/>
>>>>>>> a43bd1edee92fde9f3a777ebe847787b0e93fd66
          </div>
        </div>
        <div className="main container">
          <QuestionForm formDisplayed={this.state.formDisplayed}/>
          <QuestionList questions = {this.props.questions} />
        </div>
      </div>
    );
  }
}

var question = [
  {
    key: 1,
    title: '产品经理与程序员矛盾的本质是什么？',
    description: '理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
    voteCount: 10
  },
  {
    key: 2,
    title: '热爱编程是一种怎样的体验？',
    description: '别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
    voteCount: 811
  }
];

AppComponent.defaultProps = {
  questions: question
};

export default AppComponent;
