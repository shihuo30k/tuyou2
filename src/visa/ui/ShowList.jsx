import React from 'react';
import {ShowListContainer} from './StyledVisa'


const ShowList = props => {
  return (
    <ShowListContainer>
      <ul>
        <li>
          <div className="imgContainer">
            <img src="https://pic.qyer.com/public/supplier/lastminute/2016/11/17/14793512472870?imageView2/1/w/200/h/200" alt=""/>
            <span class="_34lmwXYTdx5aWbX2rPMKGo">北京送签</span>
          </div>
          <div className="resContent">
            <span className="topshow">英国个人旅游/商务/探亲签证(全国领区)</span>
            <p>
              <span className="saled">已售761件</span>
              <span className="price"><em>1149</em>元起</span>
              
            </p>
          </div>
        </li>
      </ul>
    </ShowListContainer>
  );
};


export default ShowList;