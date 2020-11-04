import React from 'react'
import {Anwserareacon}  from './styledRecomindex'
const Anwserarea=(props)=>{
    return(
        <Anwserareacon>
            <div className='title'>
                <div>旅途问答</div>
                <div>
                    <span>+</span>
                    我要提问
                </div>
            </div>
            <div className='listcon'>
                {
                    props.list.wenda && props.list.wenda.map((v)=>{
                          return(
                              <div className='list' key={v.id}>
                                    <div>
                                        <span>问</span>
                                        {v.title}
                                    </div>
                                    <div>
                                        {v.content}
                                    </div>
                              </div>
                          )
                    })
                }
            </div>
            <div className='lookmore'>
                <span>查看更多</span>
                <img src={`http://yl.charmiot.com/travel_qygbz1/images/%E5%9F%8E%E5%B8%82/u913.png`} alt=""/>
            </div>
        </Anwserareacon>
    )
}

export default Anwserarea