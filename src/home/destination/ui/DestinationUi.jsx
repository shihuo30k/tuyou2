import React from 'react';
import  Destination from './Search';
import Recommended from './Recommended';
import AllCountries from './AllCountries';
import CurrentHot from './CurrentHot';
import AllShow  from './AllShow';
import VisaFree from './VisaFree';
import HotIsland from './HotIsland';
import SubjectOfRecommend from './SubjectOfRecommend'
import SubjectOfShow from './SubjectOfShow'

const DestinationUi = (props) => {
  
    return (
      <div>
        <Destination></Destination>
        <Recommended></Recommended>
        <AllCountries></AllCountries>
        <CurrentHot inhotList= {props.inhotList}></CurrentHot>
        <AllShow inhotList= {props.inhotList}></AllShow>
        <VisaFree></VisaFree>
        <HotIsland></HotIsland>
        <SubjectOfRecommend></SubjectOfRecommend>
        <SubjectOfShow></SubjectOfShow>
      </div>
    );
  
}

export default DestinationUi;