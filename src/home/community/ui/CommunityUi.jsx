import React from 'react'
import {
  Container,
  ImgConWrap,
} from './styledCommunity'
import Search from '@c/search/Search';
import img from '@a/images/community-top.png';
import Topic from './Topic'
import NavBar from './NavBar';

import TodayTravel from './TodayTravel';
import Travel from './Travel';
import PartnerTravel from './PartnerTravel';

import TravelNotes from './TravelNotes'

export default function CommunityUi(props) {
  return (
    <Container>
      <Search>
          
      </Search>
      {/* <SearchWrap>
        <SearchBar placeholder="搜索" maxLength={6} 
        disabled='true'/>
      </SearchWrap> */}
      
      <ImgConWrap
       className='imgs'
       width='1px 0 0 0'
       color="#ccc"
       >
        <img  src={img} alt=""/>
      </ImgConWrap>
      <NavBar></NavBar>
      <Topic
        list = {props.topicList}
      ></Topic>
      <TodayTravel
      ></TodayTravel>
      <Travel
        list={props.travelList}
      ></Travel>
      <PartnerTravel></PartnerTravel>
     
      <TravelNotes TravelNotesList={props.TravelNotesList}
      authorList={props.authorList}
      pageSize={props.pageSize}
      ></TravelNotes>
    </Container>
  )
}
