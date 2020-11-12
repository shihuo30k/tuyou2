import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {get} from '@u/http'
import {SrWrap, SrWrapElliP} from './StyledSection'

export default () => {
    const [list, setList] = useState([])
    // const [page] = useState(4)
    const [colorList] = useState([
        {
            tColor:'#fcdde5',
            bColor:'#f7c7d3'
        },
        {
            tColor:'#fde7dc',
            bColor:'#f4d9ce'
        },
        {
            tColor:'#dceefc',
            bColor:'#c9def1'
        },
        {
            tColor:'#ece4f1',
            bColor:'#e5d6eb'
        }
    ])
    const history = useHistory()
    useEffect(() => {
        async function loadSectionData() {
            let result = await get({
                url:'/api/section'
            })
            setList(result.data.list)
        }
        loadSectionData()
    },[])
    // console.log(list.slice(0, page * 4))
    return (
        <SrWrap>
            <h1>推荐专栏</h1>
            <ul>
                {
                    list.map((value, index) => {
                        // console.log(value)
                        return (
                            <li
                            onClick={() => {history.push('/pa')}}
                            key={value.id}
                            style={{backgroundColor: colorList[index % 4].tColor}}
                            >
                                <div className="avatar">
                                    <img src={value.user_logo} alt="" onLoad={() => {dispatchEvent(new Event('resize'))}}/>
                                </div>
                                <h3>{value.sec_name}</h3>
                                <SrWrapElliP lc={2}>{value.title}</SrWrapElliP>
                                <div 
                                style={{backgroundColor: colorList[index % 4].bColor}}
                                className='bottom'>进入专栏</div>
                            </li>
                        )
                    })
                }
            </ul>
            <p className='more'>查看更多⬇</p>
        </SrWrap>
    )
}