import React from 'react'

import List from './List'
const arr1={
  "线路交通":
    ["自由行","跟团游","半自助游","定制游","机票","船票","邮轮"]
  ,
  "旅行必备":
    ["签证","wifi","电话卡","保险","酒店"]
  ,
  "当地玩乐":
    ["日游小团","深度体验","门票","城市交通","美食","购物","度假酒店"]
  ,
  "交通接送":
    ["火车票","交通卡","接送机","包车","观光巴士"]
  ,
  "最世界独家":
    ["citywalk","特色路线","穷游沙龙"]
  ,
}
export default function AllSelectedTag() {
  return (
    <>
      <List arr={arr1}></List>
    </>
  )
}
