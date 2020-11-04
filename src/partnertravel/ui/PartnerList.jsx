import React from 'react'
import {
  PartnerListWrap,
  BorderLi
} from './styledPartnerTravel'
import svg1 from '@a/images/position.svg'
import svg2 from '@a/images/calender.svg'
export default function PartnerList(props) {
  let state = props.list.toJS().list
  // console.log(props.list.toJS().list);
  return (
    <PartnerListWrap>
      <ul>

        {
          state && state.map(v=>{
            let tag =v.together_info.tag_desc
            let tag1 = tag.split("·")
            // console.log(tag1);
            return(
              <BorderLi
              key={v.id}
          width="1px 0 0 0"
          color='#ccc'
        >
          <div className='top'>
            <p>
              <img src="http://yl.charmiot.com/travel_qygbz1/images/demo/u372.jpg" alt=""/>
            </p>
            <span>coco奶茶 </span>
            <span>在21分钟前发布了</span>
          </div>
          <div className="bottom">
            <p>
              <img src="http://yl.charmiot.com/travel_qygbz1/images/demo/u372.jpg" alt=""/>
            </p>
            <p>
              <span>{v.together_info.tag_desc}</span>
              <b>
                <span>
                  <img src={svg1} alt=""/>
                {tag1[0]}
                </span>
                <span>
                <img src={svg2} alt=""/>
                <i>{v.together_info.start_time_format}-</i>
                <i> {v.together_info.end_time_format}</i>
                </span>
              </b>
            </p>
          </div>
        </BorderLi>
            )
          })
        }
        
      </ul>
    </PartnerListWrap>
  )
}
