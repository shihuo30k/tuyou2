import React from 'react'
import {
    Player,
    BigPlayButton,
    ControlBar,
    PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
    TimeDivider,
    PlaybackRateMenuButton,  // 倍速播放选项
  } from 'video-react';

export default (props) => {
    return (
        <div>
            <Player
            poster="https://pic.qyer.com/video/cover/20200916/1600250179253?imageView2/1/w/230/h/130"
            autoPlay
          >
            <source
              src='https://media.qyer.com/video/source/20200916/1600250267397'
              type="video/mp4"
            />
            <ControlBar autoHide={false} disableDefaultControls={false}>
              <PlayToggle />
              <BigPlayButton position="center" />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
            </ControlBar>
          </Player>
        </div>
    )
}