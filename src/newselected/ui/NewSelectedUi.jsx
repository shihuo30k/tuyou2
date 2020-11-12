import React from 'react'
import List from './List'
import {
  NewSelectedUiWrap
} from './styledNewSelected'
import NavBarRecommend from '@c/recommend/NavBarRecommend'
export default function NewSelectedUi() {
  return (
    <NewSelectedUiWrap>
      <NavBarRecommend>最新精华</NavBarRecommend>
      <div className="blank"></div>
      <h3>
        <p>精选攻略</p>
        <span>出境游安全提示 &gt;</span>
        </h3>
      <List></List>
    </NewSelectedUiWrap>
  )
}
