import React from 'react'
import {
  NavBarWrap
} from './styledCommunity';
import {
  NavLink
} from 'react-router-dom'
import img1 from '@a/images/community-nav1.png';
import img2 from '@a/images/community-nav2.png';
import img3 from '@a/images/community-nav3.png';
import img4 from '@a/images/community-nav4.png';
import img5 from '@a/images/community-nav5.png';

export default function NavBar() {
  return (
    <NavBarWrap>
      <ul>
        <NavLink to='/qa'>
          <li>
              <p>
                <img src={img1} alt=""/>
              </p>
              <span >穷游问答</span>
          </li>
        </NavLink>
        <NavLink to='/pt'>
          <li>
            <p>
              <img src={img2} alt=""/>
            </p>
            <span>旅行结伴</span>
          </li>
        </NavLink>
          <li>
          <p>
            <img src={img3} alt=""/>
          </p>
          <span>签证专版</span>
        </li>
        <li>
          <p>
            <img src={img4} alt=""/>
          </p>
          <span>最新精华</span>
        </li>
        <li>
          <p>
            <img src={img5} alt=""/>
          </p>
          <span>全部版面</span>
        </li>
      </ul>
    </NavBarWrap>
  )
}
