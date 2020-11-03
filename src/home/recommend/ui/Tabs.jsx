import React from 'react'
import { Tabs} from 'antd-mobile';
import {TabsWrap} from './StyledRecommend'
import TravalNote from "./TravalNote"


export default (props) => {
    const tabs = [
        { title: '全部'},
        { title: '关注'},
        { title: '折扣'},
        { title: '当季'},
        { title: '游记'},
    ];
    const tabsList = props.tabsList.slice(-20, -15)
    // console.log(tabsList)
    return (
        <TabsWrap>
            <Tabs tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => { return }}
            onTabClick={(tab, index) => {return }}
            tabBarTextStyle = {{fontSize: '.12rem', color:'#333333'}}
            tabBarActiveTextColor = 'rgba(77, 211, 148, 1)'
            tabBarUnderlineStyle = {{borderColor:'rgba(77, 211, 148, 1)',transform: 'scaleX(0.6)'}}
            >
                {
                    tabsList && tabsList.map((value) => {
                        return(
                            <TravalNote
                            key={value.data.id}
                            id = {value.data.id}
                            title={value.data.title}
                            content={value.data.content}
                            bottom={value.data.bottom}
                            image= {value.data.image}
                            lc={2}
                            >
                            </TravalNote>
                        )
                    })
                }
            </Tabs>
        </TabsWrap>
    )
}