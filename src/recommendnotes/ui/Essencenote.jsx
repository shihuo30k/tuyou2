import React from 'react'
import {Essencenotecon} from './styledRecomindex'

const Essencenote=(props)=>{
    // console.log(props.list.bestnotes)
    return(
        <Essencenotecon>
            <div>精华游记</div>
            <div className='center'>
                <ul>
                    {
                       props.list.bestnotes && props.list.bestnotes.map((v)=>{
                            return(
                            <li key={v.id}>
                                <div>
                                    <img src={v.backimg} alt=""/>
                                </div>
                                <div className='tag'>
                                    <span>{v.recom}</span>
                                    <span>{v.grade}</span>
                                </div>
                                <div className='desc'>
                                <div>{v.desc}</div>
                                </div>
                                <div className='author'>
                                    <img src={v.authsrc} alt=""/>
                                    <span>{v.auth}</span>
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
        </Essencenotecon>
    )
}

export default Essencenote