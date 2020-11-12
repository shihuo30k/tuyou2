import React from 'react'
import {useHistory} from 'react-router-dom';
import {
  NavBar,Icon
} from 'antd-mobile';
import {
  AllSelectedUiWrap
} from './styledAllSelected';
import AllSelectedTag from './AllSelectedTag'
export default function AllSelectedUi() {
 const history= useHistory()
  return (
    <AllSelectedUiWrap>
       <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => history.goBack()}
    >全部分类</NavBar>
    <AllSelectedTag></AllSelectedTag>
    </AllSelectedUiWrap>
  )
}
