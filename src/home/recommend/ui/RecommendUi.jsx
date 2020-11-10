import React from 'react'
import SwiperRecommend from './SwiperRecommend'
import Search from './Search'
import Nav from './Nav'
import Special from './Special'
import Tabs from './Tabs'
import Topical from './Topical'
import Advertising from './Advertising'
import TravalNoteList from './TravalNoteList'

const RecommendUi = (props) => {
    const {bannerList,navList,travalList,questionList,specialData} = props

    return (
        <>
            <SwiperRecommend SwiperBanner = {bannerList}></SwiperRecommend>
            <Search></Search>
            <Nav navList = {navList}></Nav>
            <Special specialData = {specialData}></Special>
            <Tabs tabsList = {travalList}></Tabs>
            <Topical topicalList={questionList}></Topical>
            <Advertising></Advertising>
            <TravalNoteList travalList={travalList}></TravalNoteList>
        </>
    )
}

export default RecommendUi