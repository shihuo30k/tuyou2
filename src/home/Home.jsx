import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    TabBar
} from 'antd-mobile'

import Recommend from './recommend/container/Recommend'
import Destination from './destination/container/Destination'
import Community from './community/container/Community'

import Mine from './mine/contaier/contaiers'
import {Container} from './StyledHome'
import {changeSelectedTab} from './actionCreator'

@connect(
  state => {
    // console.log(state.getIn(["homeSelected", "selectedTab"]))
    return {
      selectedTab:state.getIn(["homeSelected", "selectedTab"])
    }
  },
  disptch => ({
    changeTab(currentTab){
      disptch(changeSelectedTab(currentTab))
    }
  })
)
class Home extends Component {
    state = {
        selectedTab: 'recommend',
        hidden: false,
        fullScreen: true,
    }
    render() {
        return (
            <Container
            selected={this.props.selectedTab}
            >
              <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
              <TabBar
                unselectedTintColor="#949494"
                tintColor="#fff"
                barTintColor="#fff"
                hidden={this.state.hidden}
              >
                <TabBar.Item
                  title="推荐"
                  key="recommend"
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(http://yl.charmiot.com/travel_qygbz1/images/demo/u513.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(http://yl.charmiot.com/travel_qygbz1/images/demo/u511.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selected={this.props.selectedTab === 'recommend'}
                  onPress={() => {
                    this.props.changeTab('recommend')
                    // this.setState({
                    //   ...this.state,
                    //   selectedTab: 'recommend',
                    // });
                  }}
                >
                  <Recommend></Recommend>
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(http://yl.charmiot.com/travel_qygbz1/images/demo/u516.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(http://yl.charmiot.com/travel_qygbz1/images/demo/u518.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                  title="目的地"
                  key="destination"
                  selected={this.props.selectedTab === 'destination'}
                  onPress={() => {
                    this.props.changeTab('destination')
                    // this.setState({
                    //   ...this.state,
                    //   selectedTab: 'destination',
                    // });
                  }}
                >
                  <Destination></Destination>
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(http://yl.charmiot.com/travel_qygbz1/images/demo/u521.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(http://yl.charmiot.com/travel_qygbz1/images/demo/u523.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                  title="社区"
                  key="community"
                  selected={this.props.selectedTab === 'community'}
                  onPress={() => {
                    this.props.changeTab('community')
                    // this.setState({
                    //   ...this.state,
                    //   selectedTab: 'community',
                    // });
                  }}
                >
                    <Community></Community>
                </TabBar.Item>
                <TabBar.Item
                  icon={{ uri: 'http://yl.charmiot.com/travel_qygbz1/images/demo/u526.svg' }}
                  selectedIcon={{ uri: 'http://yl.charmiot.com/travel_qygbz1/images/demo/u528.svg' }}
                  title="我的"
                  key="my"
                  selected={this.props.selectedTab === 'my'}
                  onPress={() => {
                    this.props.changeTab('my')
                    // this.setState({
                    //   ...this.state,
                    //   selectedTab: 'my',
                    // });
                  }}
                >
                  <Mine></Mine>
                </TabBar.Item>
              </TabBar>
            </div>
            </Container>
          );
    }
}

export default Home;