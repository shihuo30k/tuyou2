import React, { Component } from 'react'
import QuestionsAnswersUi from '../ui/QuestionsAnswersUi'
import {connect} from 'react-redux'
import BScroll  from '@better-scroll/core'

@connect(
  state => ({
  questionList: state.getIn(['community','qaLs']),
  // state => ({
  // questionList: state.getIn(['recommend','questionList'])
  authorList:state.getIn(['community','authorList']),

}))
 class QuestionsAnswers extends Component {
  componentDidMount(){
    const authorWrap = document.querySelector('.authorWrap')
    //选中DOM中定义的 .wrapper 进行初始化
    new BScroll(authorWrap, {
      scrollX: true,  //开启横向滚动
      click:true,
    })

  }

  render() {
    return (
      
        <QuestionsAnswersUi
        questionList={this.props.questionList}
        authorList={this.props.authorList}
        >
        </QuestionsAnswersUi>

    )
  }
}
export default QuestionsAnswers