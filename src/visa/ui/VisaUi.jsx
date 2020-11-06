import React, {} from 'react'
import SearchX from "@c/search-x/SearchX.jsx"
import TopChange  from "./TopChange"
import {VisaContainer} from './StyledVisa'


const VisaUi = ()=> {
  
    return (
      <VisaContainer>
        <SearchX></SearchX>
        <TopChange></TopChange>
      </VisaContainer>
    )
  
}

export default VisaUi