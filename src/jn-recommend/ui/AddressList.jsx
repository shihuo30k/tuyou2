import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { get } from '@u/http'
import {AddressListWrap} from './StyledJnRecommend'

export default (props) => {
    const [currentData, setList] = useState({})
    const history = useHistory()
    useEffect(() => {
        const loadData = async () => {
            let result = await get({
                url:'/api/jnlist'
            })
            const current = result.data.data.find(value => {
                return value.currTabCode === props.currentTab
            })
            setList(current.tabGroups)
        }
        loadData()
    },[props.currentTab])
    // console.log(props.currentTab)
    // console.log(currentData)
    return (
        <AddressListWrap>
            {
                currentData.length > 0 && currentData.map(value => {
                    return (
                        <div 
                        className='subList'
                        key={value.groupName}
                        >
                            <h3>{value.groupName}</h3>
                            <ul className="ctlist">
                                {
                                    value.groupDests.map((subValue,i) => {
                                        return (
                                            <li 
                                            onClick={() => {history.push('/recomindex')}}
                                            key={i}>
                                                {
                                                    subValue.imageUrl ? <>
                                                        <div className='image'>
                                                            <img src={subValue.imageUrl} alt=""/>
                                                        </div>
                                                        <p>{subValue.destName}</p>
                                                    </> : <div className='text'>{subValue.destName}</div>
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </AddressListWrap>
    )
}