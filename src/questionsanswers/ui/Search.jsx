import React from 'react'
import {
  SearchWrap
} from './styledQa'
import { useHistory } from 'react-router-dom'
import { SearchBar } from 'antd-mobile'
import BackIcon from '@a/images/NavBar-Back.svg'
export default function Search() {
  const history = useHistory()
  return (
    <SearchWrap>
      <p onClick = {() =>(history.goBack() )}>
        <img src={BackIcon} alt=""/>
      </p>
      <SearchBar
        cancelText="提问"
        placeholder="输入搜索内容"
        showCancelButton
      ></SearchBar>
    </SearchWrap>
  )
}
