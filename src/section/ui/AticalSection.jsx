import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {AticalSectionWrap, ElliP, ElliDiv} from './StyledSection'
import {get} from '@u/http'

export default (props) => {
    const [list, setList] = useState([])
    const history = useHistory()
    const currentPage = useSelector(state => state.getIn(['recommend', 'travalListState', 'travalPage']))
    useEffect(() => {
        async function getData(){
            let result = await get({
                url:'/api/section'
            })
            // console.log(result.data.list)
            setList(result.data.list.slice(0, currentPage * 5))
        }
        getData()
    },[currentPage])
    // console.log(list)
    return (
        <AticalSectionWrap>
            <h2 lc={2}>推荐文章</h2>
            <ul>
                {
                    list && list.map(item => {
                        return (
                            <li
                            onClick={() => {history.push('/articleDetials')}}
                            key={item.id}
                            >
                                <div className='image'>
                                    <img src={`https:${item.cover_url}`} alt=""/>
                                </div>
                                <div className='content'>
                                    <ElliDiv className='title'  lc={2}>
                                    {item.title}
                                    </ElliDiv>
                                    <ElliP className='decr' lc={1}>
                                    {item.module}
                                    </ElliP>
                                    <div className='bottom'>
                                        <span className='name'>{item.user.username}</span>
                                        <i> · </i>
                                        <span className='date'>{item.utime_format}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </AticalSectionWrap>
    )
}