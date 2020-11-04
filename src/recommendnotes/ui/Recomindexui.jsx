
import React from 'react'
import {Recomindexcon} from './styledRecomindex'
import RnSwiper from './RnSwiper'
import Header from './Header'
import Gridlist from './Gridlist'
import Countryinfo from './Countryinfo'
import Citylist from './Citylist'
import Essencenote from './Essencenote'
import Anwserarea from './Anwserarea'
import PropTypes from 'prop-types'
const Recomindexui=(props)=>{
      return(
      <Recomindexcon>
         <Header></Header>
         <RnSwiper list={props.list}></RnSwiper>
         <Gridlist></Gridlist>
         <Countryinfo></Countryinfo>
         <Citylist list={props.list}></Citylist>
         <Essencenote list={props.list}></Essencenote>
         <Anwserarea list={props.list}></Anwserarea>
      </Recomindexcon>
      )
}
Recomindexui.propTypes={
      list:PropTypes.object
}
export default Recomindexui