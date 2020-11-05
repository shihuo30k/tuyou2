import React from 'react'
import {
  PartnerWrap
} from './styledPartnerTravel';

import Search from './Search'
// import Selected from './Selected'
import Selected from './Selected copy'
export default function PartnerTracelUi(props) {
  return (
    <PartnerWrap>
      <Search>结伴</Search>
      <Selected
      list ={props.list}
      ></Selected>

    </PartnerWrap>
  )
}
