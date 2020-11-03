import React from 'react'
import { useHistory } from 'react-router-dom'
import { TabsP,TravalNoteWrap } from './StyledRecommend'


export default (props) => {
    const history = useHistory()
    return (
        
        <TravalNoteWrap>
            <div 
            style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', height: '3rem',
                backgroundColor: '#fff', margin: '0 .1rem', borderRadius: '.05rem',
                overflow: 'hidden',boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.0862745098039216)'
            }}
            onClick={() => {history.push('/jxtravalnote',{id:props.id})}}
            >
                <div className="images">
                    <img src={props.image} alt="" />
                    <span>游记</span>
                </div>
                <div className="bottom">
                    <h2>{props.title}</h2>
                    <TabsP
                        lc={props.lc}
                    >{props.content}</TabsP>
                    <div className="author">
                        {
                            
                            props.bottom.user && <i className="touxiang">
                                <img src={props.bottom.user.logo} alt="" />
                            </i>
                        }
                        <span>{props.bottom.user ? props.bottom.user.name : props.bottom.tag.text}</span>
                    </div>
                </div>
            </div>
        </TravalNoteWrap>
    )
}