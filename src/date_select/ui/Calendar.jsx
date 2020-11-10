import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Calendar from 'react-calendar';

export default (props) => {
    const nowTime = new Date()
    const history = useHistory()
    const [value, onChange] = useState(nowTime);
    const [num, changeNum] = useState(1)
    const data = props.data
    const price = data.num.slice(0,-2)
    function decrementHandle() {
        if(num <= 1) return
        changeNum(num - 1)
    }

    function incrementHandle() {
        if(num >= 99) return;
        changeNum(num + 1)
    }
    return (
        <div>
            <div className="calendar">
                <h2>
                    <span className="title">选择日期</span>
                    <span className="text">请至少提前6天预订  嘿~亲爱的穷游er，购买前需要与供应商确认入住时段是否有房间噢~</span>
                </h2>
                <Calendar
                    // onChange={onChange}
                    value={value}
                    onClickDay={(value, event) => {
                        onChange(value)
                    }}
                    maxDetail={"month"}
                    next2Label={null}
                    prev2Label={null}   
                    showNeighboringMonth={false}
                    tileContent = {({ date, view }) => {
                        return (
                        <p style={{fontSize:".12rem"}}><br/> <span style={{color:"#FF7466"}}>￥{price}</span> <br/>{date.getTime() < nowTime.getTime() ? "售罄" : "充足"} </p>
                        )
                    }}
                    tileDisabled={({activeStartDate, date, view }) => date.getTime() < nowTime.getTime()}
                />
            </div>
            <div className="num">
                <h3>选择数量</h3>
                <div className="middle">
                    <div className="left">
                <span>￥{price}</span>
                    </div>
                    <div className="changeNum">
                        <p 
                        className="decr"
                        onClick={decrementHandle}
                        >-</p>
                        <span className="crrnumm">{num}</span>
                        <p 
                        className="incr"
                        onClick={incrementHandle}
                        >+</p>
                    </div>
                </div>
                <div className="numBottom">
                    库存：充足
                </div>
            </div>
            <div className="footer">
                <div className="fleft">
                    <span>￥</span>{price * num}
                </div>
                <div 
                className="rleft" 
                onClick={() => {history.replace('/special_detail',{value:data})}}>
                    下一步，
                    <span>支付</span>
                </div>
            </div>
        </div>
    )
}