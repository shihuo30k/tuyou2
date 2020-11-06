import React, {} from 'react'
import SearchX from "@c/search-x/SearchX.jsx"
import TopChange  from "./TopChange"
import {VisaContainer} from './StyledVisa'
import ShowList from './ShowList'


const VisaUi = ()=> {
  
    return (
      <VisaContainer>
        <SearchX></SearchX>
        <TopChange></TopChange>
        <ShowList></ShowList>
      </VisaContainer>
    )
  
}

export default VisaUi