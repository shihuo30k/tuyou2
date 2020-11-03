import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import BScroll from '@better-scroll/core';
import {HotIslandContainer} from './StyledDestination'

const HotIsland = props => {


  useEffect(()=>{
    const wrapper = document.querySelector('.wrapper3')
    new BScroll(wrapper, {
      scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: false, //关闭竖向滚动
    })
  },[])

  return (
    <HotIslandContainer>
       <span className="title">人气海岛</span>
       <div className="wrapper3">
         <ul className="content">
           <li>
             <img src="http://p1-q.mafengwo.net/s12/M00/53/82/wKgED1wvGmqANC3PACE3vGHngUE27.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fquality%2F90" alt=""/>
             <div className="innerContainer">
               <span>巴沙岛</span>
               <span>Jeiudo</span>
             </div>
           </li>
           <li>
             <img src="http://p1-q.mafengwo.net/s12/M00/53/82/wKgED1wvGmqANC3PACE3vGHngUE27.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fquality%2F90" alt=""/>
             <div className="innerContainer">
               <span>巴沙岛</span>
               <span>Jeiudo</span>
             </div>
           </li>
           <li>
             <img src="http://p1-q.mafengwo.net/s12/M00/53/82/wKgED1wvGmqANC3PACE3vGHngUE27.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fquality%2F90" alt=""/>
             <div className="innerContainer">
               <span>巴沙岛</span>
               <span>Jeiudo</span>
             </div>
           </li>
           <li>
             <img src="http://p1-q.mafengwo.net/s12/M00/53/82/wKgED1wvGmqANC3PACE3vGHngUE27.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fquality%2F90" alt=""/>
             <div className="innerContainer">
               <span>巴沙岛</span>
               <span>Jeiudo</span>
             </div>
           </li>
         </ul>
       </div>
    </HotIslandContainer>
  );
};

// VisaFree.propTypes = {
  
// };

export default HotIsland;