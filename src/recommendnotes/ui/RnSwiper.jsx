import React from 'react';

import { Carousel } from 'antd-mobile'

import {
    Swiperwrap,
} from './styledRecomindex'

const RnSwiper=(props)=>{
        return(
            <Swiperwrap>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {            
                        props.list.swiperlist && props.list.swiperlist.filter(item=>{return item.country==="芬兰"}).map(value=>{
                            return(
                                      <div key={value.id}>
                                       <img key={value.id} className="swiperimg" src={value.img}  alt=""  onLoad={()=>{window.dispatchEvent(new Event('resize'));}}/>
                                            <div className='numofimg'>
                                                    {value.imgnum}
                                            </div>
                                            <div className='nameofcountry'>
                                                    <div>{value.country}</div>
                                                    <div>{value.Engname}</div>
                                            </div>
                                            <div className='Swiperright'>
                                                <img src={`http://yl.charmiot.com/travel_qygbz1/images/%E5%9F%8E%E5%B8%82/u875.svg`} alt=""/>
                                                <span>去过</span>
                                            </div>
                                      </div>
                                  )
                    })
                  }
                </Carousel>
            </Swiperwrap>
        )
    }

export default RnSwiper;