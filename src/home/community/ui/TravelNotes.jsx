import React from 'react'

import {
  TravelNotesWrap,
  BorderLi,
  Ellipsis
} from './styledCommunity'
import Author from '@c/author/Author'
import {svg1,svg2} from './svg'
export default function TravelNotes(props) {

  const state = props.TravelNotesList
  // console.log(state.slice(0,2));
  const list1 = state && state.slice(0,2)
  const list2 = state && state.slice(2,5*props.pageSize)
  let list3 = list2.slice(0,20)
  // console.log(list2);
  // console.log(props.pageSize);


  
  
  return (
    <>
    <TravelNotesWrap>
        <h2>游记推荐</h2>
        <ul className='TravelNotesUl'>

          {
            list1 && list1.map(v=>{
              return(
                <BorderLi
                key={v.data.id}
                width='0 0 1px 0'
              >
                <div className='aa'>
                  <p>
                    <img src={v.data.image} alt=""/>
                  </p>
                  <Ellipsis
                    lc={3}
                  >
                 {v.data.content}
                  </Ellipsis>
                </div>
                <div>
                  <h3>
                    <p>
                      <img src={v.data.bottom && v.data.bottom.user && v.data.bottom.user.logo} alt=""/>
                    </p>
                    <i>{v.data.bottom && v.data.bottom.user  &&v.data.bottom.user.name}</i> &nbsp;|&nbsp;
                    <em>发布于
                      <span>{v.data_source&&v.data_source.mdd&&v.data_source.mdd.name}</span>
                    </em>
                  </h3>
                  <h4>
                    <div>
                      <p className="svg">
                        {svg1}
                      </p>
                      <span>{v.data_source.pv}</span>
                    </div>
                    <div>
                      <p className="svg">
                        {svg2}
                      </p>
                      <span>{v.data_source.reply_num}</span>
                    </div>
                  </h4>
                </div>
              </BorderLi>
              )
            })
          }
       
        </ul>
    </TravelNotesWrap>
    <Author list={props.authorList}
      leftTitle = "推荐精华作者"
      rightTitle = "如何成为精华作者"
      bnt = "关注"
    ></Author>
    <TravelNotesWrap>    
    <ul className='TravelNotesUl'>

    {
      list3 && list3.map(v=>{
        return(
          <BorderLi
          key={v.data.id}
          width='0 0 1px 0'
        >
          <div className='aa'>
            <p>
              <img src={v.data.image} alt=""/>
            </p>
            <Ellipsis
              lc={3}
            >
          {v.data.content}
            </Ellipsis>
          </div>
          <div>
            <h3>
              <p>
                <img src={v.data.bottom && v.data.bottom.user  && v.data.bottom.user.logo } alt=""/>
              </p>
              <i>{v.data.bottom && v.data.bottom.user  &&v.data.bottom.user.name}</i> &nbsp;|&nbsp;
              <em>发布于
                <span>{v.data_source&&v.data_source.mdd&&v.data_source.mdd.name}</span>
              </em>
            </h3>
            <h4>
              <div>
                <p className="svg">
                  {svg1}
                </p>
                <span>{v.data_source.pv}</span>
              </div>
              <div>
                <p className="svg">
                  {svg2}
                </p>
                <span>{v.data_source.reply_num}</span>
              </div>
            </h4>
          </div>
        </BorderLi>
        )
      })
    }

    </ul>     
    </TravelNotesWrap>  
    </>
  )
}
