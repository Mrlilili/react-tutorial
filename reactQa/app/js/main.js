/**
 * 函数功能简述
 *
 *
 *
 * @param    {string}
 * @param    {array}
 * @param    {string}
 * @returns  void
 *
 * @date     16/4/28
 * @author   Aaron
 */
var React = require('react');
var QuestionApp = require('./components/QuestionApp.js');
var mainCom = React.render(
  <QuestionApp />,
  document.getElementById('app')
)
console.log(mainCom);
