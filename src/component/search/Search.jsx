import React from 'react'
import {SearchWrap} from './styledSearch'

export default (props) => {


    return (
      <>
      <SearchWrap 
        
        >
        <input type="text"  />
        <div className="content">
            <svg t="1603421815386" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4124" width="200" height="200"><path d="M936.7 862.2L760.8 661.8c43.9-61.8 69.7-137.2 69.7-218.6 0-208.6-169.7-378.3-378.3-378.3S74 234.6 74 443.2s169.7 378.3 378.3 378.3c84.4 0 162.4-27.8 225.4-74.7l169.9 193.6c11.7 13.3 28.1 20.2 44.6 20.2 13.8 0 27.8-4.8 39-14.7 24.6-21.6 27-59.1 5.5-83.7zM452.2 703C309 703 192.5 586.5 192.5 443.2S309 183.5 452.2 183.5 712 300 712 443.2 595.5 703 452.2 703z" p-id="4125" fill="#cccccc"></path></svg>
            <span>搜索</span>
        </div>
    </SearchWrap>
        <div style={{width:"100% ",height:".5rem"}}></div>
        </>
    )
}