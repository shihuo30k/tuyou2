import React from 'react'
import {
  PartnerWrap
} from './styledPartnerTravel';
// import Search from './Search';
import Search from './Search'
import Selected from './Selected'
import PartnerList from './PartnerList'
export default function PartnerTracelUi(props) {
  return (
    <PartnerWrap>
      <Search>结伴</Search>
      <Selected></Selected>
      <PartnerList
        list ={props.list}
      ></PartnerList>
    </PartnerWrap>
  )
}
