import React ,{useState,useCallback}from 'react';
import {TopChangeContainer} from './StyledVisa'


const TopChange = props => {

  const [curShowMenu,setCurShowMenu] = useState(false)

  const [curLiMenu,setCurLiMenu]=useState()

  const [curLiContent,setCurLiContent]=useState()
  
  const [curShowMore,setcurShowMore] = useState(false)

  const [curVisaState,setCurVisaState] = useState("签证")

  // const [curSortState,setCurSortState] = useState(1)
  
  const changeShowMenu = (e)=>{

        if(e.target.tagName !== "LI" ||  e.target.className !== "changeTopLi" ){
          // console.log(e.target)
          setCurLiMenu(0)
        }
        
        if((e.target.innerHTML === curLiContent || e.target.tagName !== "LI" || e.target.className !== "changeTopLi") &&  e.target.className !==("more") ){
            // console.log(e.target)
            
            setCurShowMenu(!curShowMenu)
        }else if( e.target.className ==="more"){
          setCurLiMenu(4)
        }else if(e.target.innerHTML !== curLiContent && curShowMenu === true){
          
          // console.log(e.target)
          setCurLiContent(e.target.innerHTML)
        }else{
          setCurShowMenu(!curShowMenu)
          // console.log(e.target)
        }
        
  }
    const changeLiMenu = useCallback(
        (i)=>{
          return (e)=>{

              setCurLiContent(e.target.innerHTML)
              setCurLiMenu(i)
          }   
        },[]
      )

    const showMore = (e)=>{
      setcurShowMore(!curShowMore)
    }

    const changeVisaState = (e)=>{
      setCurVisaState(e.target.innerHTML)
    }


    // useEffect(
    //   ()=>{
    //     window.addEventListener('scroll', handlescroll,true)
    //   },[]
    // )
  

    const changeSort = (e)=>{
      const sortone = document.getElementsByClassName('sort-one');
      var sorttwo = document.getElementsByClassName('sort-two');
      if(e.target.className === "sort-two"){
        sorttwo[0] && sorttwo[0].classList.add('active1'); 
        sortone[0] && sortone[0].classList.remove('active1'); 
      }else{
        sortone[0] && sortone[0].classList.add('active1'); 
        sorttwo[0] && sorttwo[0].classList.remove('active1'); 
      }
    }

   return (
    <TopChangeContainer onClick={changeShowMenu}>
      <div className={curShowMenu ? "selectMask_box mask" : "selectMask_box "}>
        <ul className="changeUl">
   <li onClick={changeLiMenu(1)} className={curLiMenu === 1 ? "active-li changeTopLi" : "changeTopLi"}>{curVisaState}</li>
          <li onClick={changeLiMenu(2)} className={curLiMenu === 2 ? "active-li changeTopLi" : "changeTopLi"}>送签地</li>
          <li onClick={changeLiMenu(3)} className={curLiMenu === 3 ? "active-li changeTopLi" : "changeTopLi"}>综合排序</li>
          <li onClick={changeLiMenu(4)} className={curLiMenu === 4 ? "active-li changeTopLi" : "changeTopLi"}>筛选</li>
        </ul>
        <div className={curShowMenu ? "topMenu" : "topMenu topMenu-X"}>
          <div className={curLiMenu === 1 ? "" : "active"}>
           <div>
             <h2>线路/交通</h2> 
             <ul>
              <li onClick={changeVisaState}>游轮</li>
              <li onClick={changeVisaState}>船票</li>
              <li onClick={changeVisaState}>机票</li>
              <li onClick={changeVisaState}>定制游</li>
              <li onClick={changeVisaState}>半自助游</li>
              <li onClick={changeVisaState}>跟团游</li>
              <li onClick={changeVisaState}>自由行</li>
             </ul>      
           </div>
           <div>
             <h2>旅行必备</h2> 
             <ul>
              <li onClick={changeVisaState}>签证</li>
              <li onClick={changeVisaState}>wifi</li>
              <li onClick={changeVisaState}>电话卡</li>
              <li onClick={changeVisaState}>保险</li>
              <li onClick={changeVisaState}>酒店</li>
             </ul>      
           </div>
           <div>
             <h2>当代玩乐</h2> 
             <ul>
              <li onClick={changeVisaState}>城市交通</li>
              <li onClick={changeVisaState}>深度体检</li>
              <li onClick={changeVisaState}>餐饮美食</li>
              <li onClick={changeVisaState}>度假酒店</li>
              <li onClick={changeVisaState}>购物</li>
              <li onClick={changeVisaState}>门票/票卷</li>
              <li onClick={changeVisaState}>日游小团</li>
             </ul>      
           </div>
           <div>
             <h2>交通接送</h2> 
             <ul>
              <li onClick={changeVisaState}>火车票</li>
              <li onClick={changeVisaState}>接送机</li>
              <li onClick={changeVisaState}>城市交通卡</li>
              <li onClick={changeVisaState}>包车</li>
              <li onClick={changeVisaState}>观光巴士</li>
             </ul>      
           </div>
           <div>
             <h2>最世界独家</h2> 
             <ul>
              <li onClick={changeVisaState}>穷游沙龙</li>
              <li onClick={changeVisaState}>特色路线</li>
              <li onClick={changeVisaState}>citywalk</li>
             </ul>      
           </div>
          </div>
          <div className={curLiMenu === 2 ? "" : "active"}>
          <div>
             <h2>送签地</h2> 
             <ul>
              <li>全部</li>
              <li>北京/天津</li>
              <li>国内其他</li>
              <li>广州/深圳</li>
              <li>上海/杭州</li>
              <li>成都/重庆</li>
              <li>港澳台</li>
              <li>海外</li>
             </ul>      
           </div>
          </div>
          <div className={curLiMenu === 3 ? "" : "active"}>
            <ul>
              <li  onClick={changeSort} className="sort-one active1">综合排序</li>
              <li  onClick={changeSort} className="sort-two">销量排序</li>
            </ul>
          </div>
          <div className={curLiMenu === 4 ?  "" : "active"}>
            <div>
              <p>
                <span>目的地</span>
                <span className="more" onClick={showMore}>更多</span>
              </p>
              <ul className={!curShowMore ? "" : "showMore" }>
                <li>日本</li>
                <li>卢森堡</li>
                <li>新加坡</li>
                <li>意大利</li>
                <li>瑞士</li>
                <li>德国</li>
                <li>西班牙</li>
                <li>马来西亚</li>
                <li>韩国</li>
                <li>美国</li>
                <li>澳大利亚</li>
                <li>新西兰</li>
                <li>比利时</li>
                <li>英国</li>
                <li>奥地利</li>
                <li>俄罗斯</li>
                <li>泰国</li>
                <li>越南</li>
                <li>柬埔寨</li>
                <li>南非</li>
                <li>挪威</li>
                <li>葡萄牙</li>
                <li>以色列</li>
                <li>西班牙</li>
                <li>马来西亚</li>
                <li>韩国</li>
                <li>美国</li>
                <li>澳大利亚</li>
                <li>新西兰</li>
                <li>比利时</li>
                <li>英国</li>
                <li>奥地利</li>
                <li>俄罗斯</li>
                <li>泰国</li>
                <li>越南</li>
                <li>柬埔寨</li>
                <li>南非</li>
                <li>挪威</li>
                <li>葡萄牙</li>
                <li>以色列</li>
              </ul>      
            </div>
            <div>
             <h2>签证服务单元</h2> 
             <ul>
              <li>顺丰包邮</li>
              <li>拒签全退</li>
              <li>简化办理</li>
             </ul>      
           </div>
           <div className="reset">
             <div>重置</div>
             <div>全部125个好货</div>
           </div>
          </div>
        </div>
      </div>
    </TopChangeContainer>
  );
};


export default TopChange;