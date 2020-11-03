import React, { Component } from 'react';
import BScroll  from '@better-scroll/core'
import {PullToRefresh} from 'antd-mobile'

import {
  connect
} from 'react-redux'
import actionCreator from '../actionCreator'

import CommunityUi from '../ui/CommunityUi';


@connect(
  state => ({
    // todyTravelList:state.getIn(['community','todyTravelList']),
    travelList:state.getIn(['community','travelList']),
    topicList:state.getIn(['community','topicList']),
    authorList:state.getIn(['community','authorList']),
    TravelNotesList:state.getIn(['recommend','travalList']),
    refreshing:state.getIn(['recommend','travalListState','refreshing']),
    travalPage:state.getIn(['recommend','travalListState','travalPage'])

  }),
  dispatch => ({
    loadDate(){
      // dispatch(actionCreator.setTodayTravelAsync())
      dispatch(actionCreator.setTravelAsync())
      dispatch(actionCreator.setTopicAsync())
      dispatch(actionCreator.setauthorAsync())
      dispatch(actionCreator.setQaLsAsync())

    },
    
  })
)
class Community extends Component {

  state = {
    refreshing: false,
    down: true,
    height: document.documentElement.clientHeight,
    pageSize:1
  }
  componentDidMount(){
    this.props.loadDate()
    const wrap = document.querySelector('.wrap')
    //选中DOM中定义的 .wrapper 进行初始化
    new BScroll(wrap, {
      scrollX: true,  //开启横向滚动
    
    })
    const Partnerwrap = document.querySelector('.Partnerwrap')
    //选中DOM中定义的 .wrapper 进行初始化
    new BScroll(Partnerwrap, {
      scrollX: true,  //开启横向滚动
    })
    const authorWrap = document.querySelector('.authorWrap')
    //选中DOM中定义的 .wrapper 进行初始化
    new BScroll(authorWrap, {
      scrollX: true,  //开启横向滚动
    })
  }
  componentDidUpdate(){
    // console.log(this.props.todyTravelList);
    // console.log(this.props.TravelNotesList);
  }
    render() {
        return (
          <div>
            <PullToRefresh
                style={{
                  height: this.state.height,
                  overflow: 'auto',
                }}
                damping={80}
                direction={'up'}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState(prevState=>({ refreshing: true ,
                  pageSize:prevState.pageSize+1
                  }));
                  setTimeout(() => {
                    this.setState({ refreshing: false });
                  }, 1000);
                }}
      
                >
                <CommunityUi
                travelList={this.props.travelList}
                topicList={this.props.topicList}
                authorList={this.props.authorList}
                TravelNotesList={this.props.TravelNotesList}
                pageSize ={this.state.pageSize}
                >
                  
                </CommunityUi>
            </PullToRefresh>
          </div>
        );
    }
}

export default Community;