import React, { Component } from 'react';

import {
    TabBar
} from 'antd-mobile'

import Recommend from './recommend/container/Recommend'
import Destination from './destination/container/Destination'
import Community from './community/container/Community'

import Mine from './mine/contaier/contaiers'
import {Container} from './StyledHome'

class Home extends Component {
    state = {
        selectedTab: 'community',
        hidden: false,
        fullScreen: true,
    }
    render() {
        return (
            <Container
            selected={this.state.selectedTab}
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
                  selected={this.state.selectedTab === 'recommend'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'recommend',
                    });
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
                  selected={this.state.selectedTab === 'destination'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'destination',
                    });
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
                  selected={this.state.selectedTab === 'community'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'community',
                    });
                  }}
                >
                    <Community></Community>
                </TabBar.Item>
                <TabBar.Item
                  icon={{ uri: 'http://yl.charmiot.com/travel_qygbz1/images/demo/u526.svg' }}
                  selectedIcon={{ uri: 'http://yl.charmiot.com/travel_qygbz1/images/demo/u528.svg' }}
                  title="我的"
                  key="my"
                  selected={this.state.selectedTab === 'my'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'my',
                    });
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