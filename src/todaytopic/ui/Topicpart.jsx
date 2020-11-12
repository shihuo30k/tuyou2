import React from 'react'
import { Topicpartcon } from './styledtodaytopic'
const Topicpart=(props)=>{
    return(
        <Topicpartcon>
            <div className="title">今日话题|说一说你在旅途中 都丢过什么东西？</div>

            <div className="detail">
                <div className="authimg">
                    <img src="http://yl.charmiot.com/travel_qygbz1/images/%E6%B8%B8%E8%AE%B0/u1038.png" alt=""/>
                </div>
                <div className="detailright">
                    <div className="namedetail">
                        流浪的猫咪
                        <img src="http://yl.charmiot.com/travel_qygbz1/images/%E6%B8%B8%E8%AE%B0/u1040.svg" alt=""/>
                    </div>

                    <div className="record">
                        <span>888</span>回复|<span>666</span>回复|<span>99999</span>浏览
                    </div>

                    <div className="time">
                        <span>发布于2020年1-1</span> &nbsp; <span>18:18</span>
                    </div>
                </div>
            </div>

            <div className="from">
                 <div>
                     <span>来自</span>&nbsp;
                     <span>活动板块</span>
                 </div>
                 <div>
                     查看更多
                    <img src="http://yl.charmiot.com/travel_qygbz1/images/%E5%9F%8E%E5%B8%82/u913.png" alt=""/>
                 </div>
            </div>
        </Topicpartcon>
    )
}

export default Topicpart