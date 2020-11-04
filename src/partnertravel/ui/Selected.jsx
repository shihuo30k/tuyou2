import React from 'react'
import {
  SelectedWrap
} from './styledPartnerTravel'

import svg1 from '@a/images/bottom.svg'
export default function Selected() {
  return (
    <SelectedWrap
      width="0 0 1px 0"
      color='#ccc'
    >
      <div>
        <span>目的地 --</span>
        <span>不限</span>
        <img src={svg1} alt=""/>
      </div>
      <div>
        <span>出发时间 --</span>
        <span>不限</span>
        <img src={svg1} alt=""/>
      </div>
    </SelectedWrap>
  )
}
