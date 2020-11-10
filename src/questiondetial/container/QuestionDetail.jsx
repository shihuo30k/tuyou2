import React from 'react'
import QuestionDetailUi from '../ui/QuestionDetailUi'
export default function QuestionDetail(props) {
  return (
    <div>
      <QuestionDetailUi
        detail={props.location.state}
      ></QuestionDetailUi>
    </div>
  )
}
