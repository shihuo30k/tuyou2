import React,{useState,useCallback} from 'react';
import { useHistory } from 'react-router-dom'
import {SearchContainer} from './StyledSearch'



const SearchX = props => {

  const [curSearchState,setcurSearchState]=useState(0)

  const changeSearchStatus = (i)=>{
    return ()=>{
      setcurSearchState(i)
    }
  }

  const changeTopSearch = (i)=>{
    return ()=>{
      setcurSearchState(i)
    }
  }

  const history = useHistory()

  const GotoBack = useCallback(
    () => {
     
      history.goBack()
    }
  ,[history])

  return (
    <SearchContainer onClick={changeSearchStatus(1)}>
      <svg t="1604495618008"  onClick={GotoBack}  viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4884" width="200" height="200"><path d="M554.64194766 141.21142578c12.79220581 0 23.71810889 4.50508117 32.77152968 13.64501953 9.05960107 9.01016235 13.59558082 19.95460487 13.59558153 32.6911924 0 13.1320951-4.57305932 24.07653833-13.76861596 32.95692466l-245.12832642 245.09124757h722.35794044c12.79838538 0 23.69338989 4.50508117 32.81478882 13.64501953 9.02252221 9.01016235 13.56468224 19.94842529 13.56468224 32.69119239 0 12.87872338-4.54216003 23.81698632-13.57086182 32.82714867-9.11521935 9.01016235-20.01022315 13.51524353-32.80242896 13.51524353H342.11829606l245.12214685 245.09124756c9.19555664 9.01016235 13.76861596 19.95460487 13.76861596 32.9507444 0 12.8725431-4.53598046 23.81698632-13.59558153 32.82714867-9.05342078 9.13993836-19.98550415 13.64501953-32.77152968 13.64501953-13.05175781 0-24.03945947-4.50508117-32.95692467-13.38546753L197.2573804 545.01872253C188.34609476 535.62541175 183.87809244 524.54501367 183.87809244 512.06179786c0-12.60681153 4.46800232-23.55125404 13.37928796-32.95074439l324.42764259-324.37820459C530.8620402 145.84628296 541.84356156 141.33502221 554.64194766 141.33502221V141.21142578z" p-id="4885" fill="#ffffff"></path></svg>
      <div className="input">
      <svg t="1604496783063"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5888" width="200" height="200"><path d="M953.6 902.4l-211.2-211.2c57.6-64 89.6-147.2 89.6-243.2 0-211.2-172.8-384-384-384S64 236.8 64 448s172.8 384 384 384c96 0 179.2-32 249.6-89.6l211.2 211.2c6.4 6.4 12.8 6.4 25.6 6.4s19.2 0 25.6-6.4c0-12.8 0-38.4-6.4-51.2zM128 448c0-179.2 140.8-320 320-320s320 140.8 320 320-140.8 320-320 320-320-140.8-320-320z" fill="#ffffff" p-id="5889"></path></svg>
        <input type="text" onClick={changeTopSearch(0)} placeholder="搜索目的地/折扣/关键字"/>
      </div>
      <div className={curSearchState === 0 ? "search" : "search search-none"}>搜索</div>
    </SearchContainer>
  );
};



export default SearchX;