import React from 'react'
import {
    Player,
    ControlBar,
    PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
    ReplayControl, // 后退按钮
    ForwardControl,  // 前进按钮
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,  // 倍速播放选项
    VolumeMenuButton
  } from 'video-react';

export default (props) => {
    return (
        <div>
            <Player
            poster="https://pic.qyer.com/video/cover/20200916/1600250179253?imageView2/1/w/230/h/130"
          >
            <source
              src='https://media.qyer.com/video/source/20200916/1600250267397'
              type="video/mp4"
            />
            <ControlBar autoHide={false} disableDefaultControls={false}>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <PlayToggle />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
              <VolumeMenuButton />
            </ControlBar>
          </Player>
        </div>
    )
}