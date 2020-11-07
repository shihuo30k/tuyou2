import React,{useState} from 'react'
import { NavBar, Icon ,InputItem} from 'antd-mobile';
import {
  useHistory
} from 'react-router-dom';
import {
  MySubscribeListWrap,
  BorderH4
} from './styledMySubscribe'
export default function MySubscribeList() {
  const history = useHistory()
  const [state, setState] = useState( {
    value1: '',
    value2: '',
    value3: '',
  })
  // const handleChange = () => {
  //   return (e) => {
  //      console.log(e);
  //   }
  // }
 const handleChange1 = (value1) => {
  setState(prestate=>({
    value1,
    value2:prestate.value2,
    value3:prestate.value3
  }));
  }
 const handleChange2 = (value2) => {
    setState(prestate=>({
      value2,
      value1:prestate.value1,
      value3:prestate.value3
    }));
  }
 const handleChange3 = (value3) => {
    setState(prestate=>({
      value3,
      value1:prestate.value1,
      value2:prestate.value2
    }));
  }
  const handleClick = () => {
    console.log(0);
  }
  return (
    <MySubscribeListWrap>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
        rightContent={[
          
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        我的订阅——旅游专栏
      </NavBar>

      <h2>申请专栏作家</h2>
      <h3>为更广泛的旅游内容分享，我们开通了专栏栏目，作者可以在每个主题下进行创作，创建专栏需本人申请，通过后可写作。我们鼓励原创。专栏需要有明确主题方向，且与旅行密切相关。</h3>
      <h2>专栏名称</h2>
      <InputItem
        type="text"
        editable="true"
        placeholder="请输入专栏名称"
        onChange={handleChange1}
        value={state.value1}
        
      ></InputItem>
      <h2>专栏方向</h2>
      <InputItem
        type="text"
        editable="true"
        placeholder="请输入专栏方向"
        onChange={handleChange2}
        value={state.value2}
        
      ></InputItem>
      <h2>专栏介绍</h2>
      <textarea name="" id="" cols="36" rows="10"
       onChange={handleChange3}
      ></textarea>

      <div className="btnWrap">
        <BorderH4 
          color="#49BE77"
          radius={.04}
        className='btn'
          onClick={handleClick}
        >
          申请开通
        </BorderH4>
      </div>
    </MySubscribeListWrap>
  )
}
