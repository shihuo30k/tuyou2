import React from 'react'
import { Citylistcon } from './styledRecomindex'
const Citylist=(props)=>{
    // console.log(props)
    return(
        <Citylistcon>
            <div className='cityname'>芬兰城市</div>
            <div className='cityimgcon'>
                            <ul>
            {
            props.list.citylist && props.list.citylist.filter(item=>{return item.country==='芬兰'})[0].citylist.map(v=>{
                // console.log(v); 
                    return(
                        
                                <li key={v.id}>
                                    <div>
                                        <img  src={v.imgsrc} alt=""/>
                                    </div>
                                    <div className='mengceng'>

                                    </div>
                                    <div>
                                        <div>{v.cityname}</div>
                                        <div>{v.Englishname}</div>    
                                    </div>
                                </li>
                            
                    )
            })
          }
          </ul>
        </div>
            <div className='lookmore'>
                <span>查看更多</span>
                <img src={`http://yl.charmiot.com/travel_qygbz1/images/%E5%9F%8E%E5%B8%82/u913.png`} alt=""/>
            </div>
        </Citylistcon>
    )
}

export default Citylist