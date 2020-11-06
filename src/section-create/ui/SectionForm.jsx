import React,{useState,useRef} from 'react'
import {FormWrap, InputWrap} from './StyledSectionCreate'
import {post} from '@u/http'

export default (props) => {
    const [data, setData] = useState({
        name:'',
        direc:'',
        desc:''
    })

    const nameRef = useRef()
    const direcRef = useRef()
    const descRef = useRef()
    async function submitHandle(){
        const name = nameRef.current.value
        const direc = direcRef.current.value
        const desc = descRef.current.value
        setData({
            name,
            direc,
            desc
        })
        try {
            let result = await post({
                url:'http://baidu.com',
                data
            })
            console.log(result)
        }catch(e) {
            return e
        }
    }
    return(
        <FormWrap>
            <form action="" method="POST">
                <div className='item'>
                    <p>专栏名称</p>
                    <InputWrap 
                    width='1px 1px 1px 1px'
                    radius='.05'
                    className='inputWrap'>
                        <input type="text" ref={nameRef} />
                    </InputWrap>
                </div>
                <div className='item'>
                    <p>专栏方向</p>
                    <InputWrap 
                    width='1px 1px 1px 1px'
                    className='inputWrap'>
                        <input type="text" ref={direcRef}/>
                    </InputWrap>
                </div>
                <div className='item'>
                    <p>专栏介绍</p>
                    <InputWrap 
                    width='1px 1px 1px 1px'
                    className='inputWrap'>
                        <textarea ref={descRef} id="" cols="45" rows="5"></textarea>
                    </InputWrap>
                </div>
                <button 
                className="submit" 
                onClick={submitHandle}
                type="button"
                >申请开通</button>
            </form>
        </FormWrap>
    )
}