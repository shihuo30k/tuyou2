import React from 'react';
import NavBarRecommend from '@c/recommend/NavBarRecommend'
import Footprint from './Footprint'
import CountriesVisited from './CountriesVisited'
import Thailand from './Thailand'
import Japan from './Japan'
import Singapore from './Singapore'

import {NavBarRecommends} from '../StyledMine'

const FootprintUi = () => {
    return (
      <NavBarRecommends>
      <div>
        <NavBarRecommend>我的足迹</NavBarRecommend>
        <Footprint></Footprint>
        <CountriesVisited></CountriesVisited>
        <Thailand></Thailand>
        <Japan></Japan>
        <Singapore></Singapore>
      </div>
      </NavBarRecommends>
    );
  
}

export default FootprintUi;