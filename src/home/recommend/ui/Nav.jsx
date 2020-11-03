import React from "react"
import {useHistory} from 'react-router-dom'
import {NavWrap} from './StyledRecommend'

export default (props) => {
    const list = props.navList
    const history = useHistory()
    return(
        <NavWrap>
            <ul>
                {
                    list.map(value => (
                        <li
                        key={value.id}
                        onClick={() => history.push(value.url)}
                        >
                            <img src={value.svg} alt=""/>
                            <p>{value.title}</p>
                        </li>
                    ))
                }
            </ul>
        </NavWrap>
    )
}