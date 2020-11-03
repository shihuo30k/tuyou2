import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {PullToRefresh} from 'antd-mobile'
import NavBar from '@c/recommend/NavBarRecommend'
import SectionTitle from './SectionTitle'
import SectionRecommend from './SectionRecommend'
import AticalSection from './AticalSection'
import {changeTravalListState} from '@h/recommend/actionCreator'
import {SectionWrap, SectionMainWrap,WhiteSpace} from './StyledSection'

export default (props) => {
    const refreshing = useSelector(state => state.getIn(["recommend","travalListState", 'refreshing']))
    const travalPage = useSelector(state => state.getIn(["recommend","travalListState", 'travalPage']))
    const dispatch = useDispatch()
    // console.log(refreshing)
    return (
        <SectionWrap>
            <NavBar>作家专栏</NavBar>
            <p className="navbar-right">我的订阅</p>
            <WhiteSpace></WhiteSpace>
            <PullToRefresh
                style={{
                    height: document.documentElement.clientHeight,
                    overflow: 'auto',
                }}
                damping={80}
                direction={'up'}
                refreshing={refreshing}
                onRefresh={() => {
                    dispatch(changeTravalListState({
                        refreshing:true,
                        travalPage:travalPage + 1
                    }))
                    setTimeout(() => {
                        changeTravalListState({
                            refreshing:false,
                            travalPage
                        })
                      }, 1000);
                }}
                >
                    <SectionMainWrap 
                    width="1px 0 0 0"
                    >
                        <SectionTitle></SectionTitle>
                        <SectionRecommend></SectionRecommend>
                        <AticalSection></AticalSection>
                    </SectionMainWrap>
            </PullToRefresh>
        </SectionWrap>
    )
}