import React from 'react'

import {
  QaUiWrap
} from './styledQa'
import Search from './Search'
import SelectedQA from './SelectedQA'
export default function QuestionsAnswersUi(props) {
  return (
    <QaUiWrap>
      <Search></Search>
      <SelectedQA
        questionList={props.questionList}
        authorList={props.authorList}
        pageSize={props.pageSize}
      ></SelectedQA>
    </QaUiWrap>
  )
}
