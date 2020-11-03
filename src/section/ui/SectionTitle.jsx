import React, {useState, useLayoutEffect} from 'react'
import {SectionTitleWrap} from './StyledSection'

export default (props) => {
    const [titleStr] = useState({
        pStr1:['分','享'],
        pStr2:['用','创','造','定','义','旅','行']
    })

    useLayoutEffect(() => {
        let i = 0
        const titleWords = document.querySelectorAll('.title p')
        const title2 = document.querySelector('.title2')
        // console.log(titleWords.length)
        let id = setInterval(() => {
            titleWords[i].style.opacity = '1'
            i++
            if(i === titleWords.length) {
                clearInterval(id)
                const tag = document.createElement('div')
                tag.className = "blinkTag"
                const divBlink = document.querySelector('.title2 div')
                if(!divBlink) title2.appendChild(tag)
            }
        }, 200); 
    })

    return(
        <SectionTitleWrap className="title">
            <div className='title1'>
                {
                    titleStr.pStr1.map((value, index) => {
                        return (
                            <p key={index}>{value}</p>
                        )
                    })
                }
            </div>
            <div className='title2'>
                {
                    titleStr.pStr2.map((value, index) => {
                        return (
                            <p key={index}>{value}</p>
                        )
                    })
                }
            </div>
            <span className="how">
                如何成为专栏作家{">"}
            </span>
        </SectionTitleWrap>
    )
}