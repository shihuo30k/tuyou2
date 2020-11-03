import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import BScroll from '@better-scroll/core';
import {VisaFreeContainer} from './StyledDestination'

const VisaFree = props => {


  useEffect(()=>{
    const wrapper = document.querySelector('.wrapper2')
    new BScroll(wrapper, {
      scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: false, //关闭竖向滚动
    })
  },[])

  return (
    <VisaFreeContainer>
       <span className="title">免签目的地</span>
       <div className="wrapper2">
         <ul className="content">
           <li>
             <img src="https://p1-q.mafengwo.net/s15/M00/A7/6E/CoUBGV3js1GAPe9pAAMDgN3F5MM13.jpeg?imageMogr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2F100" alt=""/>
             <div className="innerContainer">
               <span>济州岛</span>
               <span>leiudo</span>
             </div>
           </li>
           <li>
             <img src="https://p1-q.mafengwo.net/s15/M00/A7/6E/CoUBGV3js1GAPe9pAAMDgN3F5MM13.jpeg?imageMogr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2F100" alt=""/>
             <div className="innerContainer">
               <span>济州岛</span>
               <span>leiudo</span>
             </div>
           </li>
           <li>
             <img src="https://p1-q.mafengwo.net/s15/M00/A7/6E/CoUBGV3js1GAPe9pAAMDgN3F5MM13.jpeg?imageMogr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2F100" alt=""/>
             <div className="innerContainer">
               <span>济州岛</span>
               <span>leiudo</span>
             </div>
           </li>
           <li>
             <img src="https://p1-q.mafengwo.net/s15/M00/A7/6E/CoUBGV3js1GAPe9pAAMDgN3F5MM13.jpeg?imageMogr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2F100" alt=""/>
             <div className="innerContainer">
               <span>济州岛</span>
               <span>leiudo</span>
             </div>
           </li>
         </ul>
       </div>
    </VisaFreeContainer>
  );
};

// VisaFree.propTypes = {
  
// };

export default VisaFree;