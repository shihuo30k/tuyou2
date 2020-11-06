import React, { useEffect,useState}  from 'react';
import {get} from '@u/http'
import {
  ListWrap,
  EllipsisH5
} from './styledNewSelected'
import svg1 from '@a/images/eye.svg'
import svg2 from '@a/images/thumb.svg'
export default function List() {
const [state, setState] = useState({list:[]})
  useEffect(() => {
   (async ()=>{
     let result = await get({
      url:'/api/newselected'
    })
    setState({
      list:result.data.data
    })
   })()
  }, [])
  // console.log(state.list);
  return (
    <ListWrap>
      <ul>

        {
          state.list && state.list.map(v=>{
            return(
              <li
                key={v.id}
              >
              <div className="imgs">
                <img src={v.cover} alt="" style={{height:v.img_info ? (v.img_info.height/v.img_info.width)*1.6+"rem":1.6+"rem" ,width:"1.6rem"}}/>
                <EllipsisH5
                  lc={2}
                > {v.title}</EllipsisH5>
              </div>
              <div className="bottom">
                <p>
                  <img src="https://pic.qyer.com/avatar/012/63/34/23/200?v=1604639494" alt=""/>
                 {v.username}
                </p>
               {v.nlikes && <p>
                  <img src={svg1} alt=""/>
                  {v.nlikes}
                </p>}
               {v.renum && <p>
                  <img src={svg2} alt=""/>
                  {v.renum}
                </p>}
              </div>
          </li>
            )
          })
        }
       
        {/* <li>
            <div>
              <img src="https:\/\/pic.qyer.com\/avatar\/012\/63\/75\/67\/200" alt=""/>
            </div>
            <div>
              <p>
                <img src="" alt=""/>
                你好你好
                你好你好
                你好你好
              </p>
              <p>
                <img src="" alt=""/>
                
              </p>
              <p>
                <img src="" alt=""/>

              </p>
            </div>
        </li>
        <li>
            <div>
              <img src="https:\/\/pic.qyer.com\/avatar\/012\/63\/75\/67\/200" alt=""/>
            </div>
            <div>
              <p>
                <img src="" alt=""/>
                你好你好
                你好你好
                你好你好
              </p>
              <p>
                <img src="" alt=""/>
                
              </p>
              <p>
                <img src="" alt=""/>

              </p>
            </div>
        </li> */}
      </ul>
    </ListWrap>
  )
}
