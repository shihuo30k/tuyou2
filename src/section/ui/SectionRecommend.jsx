import React, {useEffect, useState} from 'react'
import {get} from '@u/http'
import {SrWrap} from './StyledSection'

export default () => {
    const [list, setList] = useState([])
    const [page] = useState(4)
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
    const lis = list.slice(8, page * 4)
    return (
        <SrWrap>
            <h1>推荐专栏</h1>
            <ul>
                {
                    lis.map((value, index) => {
                        // console.log(value)
                        return (
                            <li
                            key={value.id}
                            style={{backgroundColor: colorList[index % 4].tColor}}
                            >
                                <div className="avatar">
                                    <img src={`https://pic.qyer.com/public/zhuanlan/zhuanlan/2018/07/26/15325750126940?imageMogr2/auto-orient/thumbnail/!200x200r/gravity/Center/crop/200x200/format/jpg|imageslim`} alt="" onLoad={() => {dispatchEvent(new Event('resize'))}}/>
                                </div>
                                <h3>{value.zhuanlan.name}</h3>
                                <p>{value.title}</p>
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