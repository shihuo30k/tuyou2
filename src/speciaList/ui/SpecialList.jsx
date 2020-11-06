import React from 'react'
import {SpecialUlWrap,ListContentEll,ListPriceBor} from './StyledSpecialList'

export default (props) => {
    const list = props.list
    return (
        <SpecialUlWrap>
            <ul>
                {
                    list.map((value, index) => {
                        return(
                            <li key={index}>
                                <div className="image">
                                    <img src={value.img} alt=""/>
                                </div>
                                <div className="bottom">
                                    <ListContentEll className="content" lc={2}>
                                        {value.title}
                                    </ListContentEll>
                                    <ListPriceBor className="price" width="1px 0 0 0">
                                        {value.num}
                                    </ListPriceBor>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </SpecialUlWrap>
    )
}