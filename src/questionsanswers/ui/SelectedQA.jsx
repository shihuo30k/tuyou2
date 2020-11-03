import React ,{useState} from 'react'
import { TabBar } from 'antd-mobile';
import {
  SelectedQAWrap
} from './styledQa'
import SelectedQA1 from './SelectedQA1'
export default function SelectedQA(props) {
  const [state, setState] = useState(
    {selectedTab: 'redTab',
    hidden: false,
    fullScreen: true,

  })
  // console.log(state.selectedTab)
  // console.log(props.questionList.toJS());
  return (
    <>
    
      <SelectedQAWrap>
        <div style={state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 50 } : { height:'100%'}}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#3fcd90 "
            barTintColor="white"
            hidden={state.hidden}
            tabBarPosition="top"
          >
             <TabBar.Item
              title="精选问答"
              key="redTab"
              icon={<div style={{
                width: '0',
                height: '0',
                }}
              />
              }
              selectedIcon={<div style={{
                width: '70px',
                height: '2px',
                background: '#3fcd90 center bottom /  70px 2px no-repeat' }}
              />}
              selected={state.selectedTab === 'redTab'}
              onPress={() => {
                setState({
                  selectedTab: 'redTab',
                });
              }}
            >
              
             <SelectedQA1 
             questionList ={props.questionList}
             authorList={props.authorList}
             ></SelectedQA1>

            </TabBar.Item>
             <TabBar.Item
              title="最新问答"
              key="blueTab"
              icon={<div style={{
                width: '0',
                height: '0',
                }}
              />
              }
              selectedIcon={<div style={{
                width: '70px',
                height: '2px',
                background: '#3fcd90 center bottom /  70px 2px no-repeat' }}
              />}
              selected={state.selectedTab === 'blueTab'}
              onPress={() => {
                setState({
                  selectedTab: 'blueTab',
                });
              }}
            >
             
            </TabBar.Item>
             <TabBar.Item
              title="待回答问题"
              key="pinkTab"
              icon={<div style={{
                width: '0',
                height: '0',
                }}
              />
              }
              selectedIcon={<div style={{
                width: '70px',
                height: '2px',
                background: '#3fcd90 center bottom /  70px 2px no-repeat' }}
              />}
              selected={state.selectedTab === 'pinkTab'}
              onPress={() => {
                setState({
                  selectedTab: 'pinkTab',
                });
              }}
            >
             
            </TabBar.Item>
  
  
          </TabBar>
          </div>
      </SelectedQAWrap>

  </>
    )
}
