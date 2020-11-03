import React, {useState} from 'react'
import { JnContainer, WhiteSpace, JnGuideWrap, JnGuideLiWrap } from './StyledJnRecommend'
import NavBar from '@c/recommend/NavBarRecommend'
import AddressList from './AddressList'

export default (props) => {
    const list = props.JnGuideList
    // console.log(list)
    const [activeTab, setActive] = useState("recommend")
    return (
        <JnContainer>
            <NavBar>推荐锦囊</NavBar>
            <WhiteSpace className = "space"></WhiteSpace>
            <JnGuideWrap
            width="1px 0 0 0"
            >
                <ul>
                    {
                        list && list.map((value) => {
                            return (
                                <JnGuideLiWrap
                                width={!activeTab === value.type ? "0 1px 1px 0" : "0 0 1px 0"}
                                key={value.type}
                                onClick={() => {setActive(value.type)}}
                                className={activeTab === value.type ? 'active' : ''}
                                >
                                    {value.title}
                                </JnGuideLiWrap>
                            )
                        })
                    }
                </ul>
                <div className="content">
                    <AddressList currentTab={activeTab}></AddressList>
                </div>
            </JnGuideWrap>
        </JnContainer>
    )
}